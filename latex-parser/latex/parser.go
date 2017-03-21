package latex

import (
	"fmt"
	"io"
)

// init size of a document slice
const INITIAL_LIST_SIZE = 0

const TYPE_TEXT = "Text"
const COMPLEX_TYPE = "Complex"

type Element interface {
}

type Document struct {
	Document []TopElement
}

type Command struct {
	Type string
	Body string
}

type ComplexElement struct {
	Type string
	Name string
	Body []Element
}

type TopElement struct {
	Name string
	Body []ContentElement
	Line int
}

type ContentElement struct {
	Type string
	Body string
	Line int
}

// Parser represents a parser.
type Parser struct {
	s *Scanner
	// buffer to enable unread
	buf struct {
		tok Token  // last read token
		lit string // last read literal
		cnt int    // last read line number
		n   int    // buffer size (max=1)
	}
}

// NewParser returns a new instance of Parser.
func NewParser(r io.Reader) *Parser {
	return &Parser{s: NewScanner(r)}
}

// Parse parses a latex document.
func (p *Parser) Parse() (*Document, error) {
	stmt := &Document{}
	elementList, error := p.parse()
	stmt.Document = elementList
	if error == nil {
		return stmt, nil
	} else {
		return nil, error
	}
}

// parses a complex element or the root document. This function is recursive.
func (p *Parser) parse() ([]TopElement, error) {
	elementList := make([]TopElement, INITIAL_LIST_SIZE)

	for {
		// scan next element
		tok, _, cnt := p.scanIgnoreWhitespace()

		switch tok {

		case BEGIN:

			// scan next element to get the param Name
			tok, lit, _ := p.scanIgnoreWhitespace()
			if tok != PARAM {
				return nil, fmt.Errorf("encountered \\begin without parameter")
			}
			topElement := &TopElement{}
			topElement.Name = lit
			topElement.Line = cnt
			body, error := p.parseBody(true)
			if error != nil {
				return nil, error
			}
			topElement.Body = body
			// add element to the document
			elementList = append(elementList, *topElement)
			break

		case EOF:
			// Return the successfully parsed statement.
			return elementList, nil
			break

		default: // Something without \Begin \end, eg. Setting
			//construct an top element with empty name
			topElement := &TopElement{}
			topElement.Name = ""
			topElement.Line = cnt
			p.unscan()
			body, error := p.parseBody(false)
			if error != nil {
				return nil, error
			}
			topElement.Body = body
			// add element to the document
			elementList = append(elementList, *topElement)
			break
		}
	}
	// input terminates with the EOF token
	return nil, fmt.Errorf("unexpected termination of loop")
}

// parse a contentElementList
func (p *Parser) parseBody(isWithinBegin bool) ([]ContentElement, error) {
	contentElementList := make([]ContentElement, INITIAL_LIST_SIZE)

	for {
		// scan next element
		tok, lit, cnt := p.scanIgnoreWhitespace()

		switch tok {
		case BEGIN:
			if isWithinBegin {
				//parse begin (normally regie)
				element, error := p.parseBegin()
				if error != nil {
					return nil, error
				}
				element.Line = cnt // save line number information
				// add element to the document
				contentElementList = append(contentElementList, *element)
			} else {
				p.unscan()
				return contentElementList, nil
			}

			break

		case COMMAND:
			p.unscan()
			// parse setting inclusive params
			element, error := p.parseSetting()
			if error != nil {
				return nil, error
			}
			element.Line = cnt // save line number information
			// add setting to the document
			contentElementList = append(contentElementList, *element)
			break

		case TEXT:
			p.unscan()
			// parse text
			element, error := p.parseText()
			if error != nil {
				return nil, error
			}
			element.Line = cnt // save line number information
			// add parsed text to the document
			contentElementList = append(contentElementList, *element)
			break

		case END:
			// consume param and return
			p.scanIgnoreWhitespace()
			// Return the successfully parsed statement.
			return contentElementList, nil
			break

		case PARAM:
			// params should only occur after an command
			return nil, fmt.Errorf("found parameter %q without a command", lit)
			break

		case ILLEGAL:
			return nil, fmt.Errorf("found %q, expected known keyword or Text", lit)
			break

		case EOF:
			return contentElementList, nil
			p.unscan()
			break

		default:
			return nil, fmt.Errorf("unexpected %q", lit)
		}

	}
}

func (p *Parser) parseBegin() (*ContentElement, error) {
	contentElement := &ContentElement{} //contains the actual data

	// Read parameter
	tok, lit, _ := p.scanIgnoreWhitespace()
	if tok != PARAM {
		return nil, fmt.Errorf("Error, expected Parameter after \\begin")
	}
	if lit != "Regie" {
		fmt.Printf("Warning, found %q, expected Regie\n", lit)
		_, lit, _ := p.scanIgnoreWhitespace()
		fmt.Printf("Text: %q", lit)
		p.unscan()
	}

	contentElement.Type = lit
	element, error := p.parseText()
	if error != nil {
		return nil, error
	}

	contentElement.Body = element.Body
	return contentElement, nil

}

// parseSetting parses a setting within the Latex file
func (p *Parser) parseSetting() (*ContentElement, error) {
	contentElement := &ContentElement{} //contains the actual data

	// Read parameter
	tok, lit, _ := p.scanIgnoreWhitespace()
	//Token should be a "COMMAND" keyword.
	if tok == COMMAND {
		contentElement.Type = lit
	} else {
		return nil, fmt.Errorf("found %q, expected COMMAND", lit)
	}

	// Read parameter
	tok, lit, _ = p.scanIgnoreWhitespace()
	if tok != PARAM {
		p.unscan()
	}
	contentElement.Body = lit

	// Return the successfully parsed command.
	return contentElement, nil
}

// parseText parses a latex text.
func (p *Parser) parseText() (*ContentElement, error) {
	contentElement := &ContentElement{}

	// Read parameter
	tok, lit, _ := p.scanIgnoreWhitespace()

	//Token should be a "COMMAND" keyword.
	if tok == TEXT {
		contentElement.Type = TYPE_TEXT
		contentElement.Body = lit
	} else {
		return nil, fmt.Errorf("found %q, expected TEXT", lit)
	}

	// Return the successfully parsed text.
	return contentElement, nil
}

// scan returns the next token from the underlying scanner.
// If a token has been unscanned then read that instead.
func (p *Parser) scan() (tok Token, lit string, cnt int) {
	// If we have a token on the buffer, then return it.
	if p.buf.n != 0 {
		p.buf.n = 0
		return p.buf.tok, p.buf.lit, p.buf.cnt
	}

	// Otherwise read the next token from the scanner.
	tok, lit, cnt = p.s.Scan()

	// Save it to the buffer in case we unscan later.
	p.buf.tok, p.buf.lit, p.buf.cnt = tok, lit, cnt

	return
}

// scanIgnoreWhitespace scans the next non-whitespace token.
func (p *Parser) scanIgnoreWhitespace() (tok Token, lit string, cnt int) {
	tok, lit, cnt = p.scan()
	if tok == WS {
		tok, lit, cnt = p.scan()
	}
	return
}

// unscan pushes the previously read token back onto the buffer.
func (p *Parser) unscan() { p.buf.n = 1 }
