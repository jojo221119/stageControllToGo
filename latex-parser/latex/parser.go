package latex

import (
	"fmt"
	"io"
	"log"
)

//INITIAL_LIST_SIZE is the init size of a document slice
const INITIAL_LIST_SIZE = 0

// specify the names that are defined for a specific latex snippet
const TYPE_TEXT = "Text"
const COMPLEX_TYPE = "Complex"

// struct to represent the Abstract Syntax Tree (AST) of the result
type Document struct {
	// complete latex document
	Document []TopElement
}

type TopElement struct {
	Name string
	Line int
	Body []ContentElement
}

type ContentElement struct {
	Type string
	Line int
	Body string
}

// Parser class to build the AST.
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

// Parse parses a latex document into an AST.
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

// parses the content into TopElement structs
func (p *Parser) parse() ([]TopElement, error) {
	elementList := make([]TopElement, INITIAL_LIST_SIZE)

	for {
		// scan next element
		tok, _, cnt := p.scanIgnoreWhitespace()

		// There two main cases: A \begin \end structure with a maximum nesting of twe or settings of the form \Einstellung{Param}
		switch tok {
		case BEGIN:
			// scan next element to get the param Name
			tok, lit, cnt := p.scanIgnoreWhitespace()
			if tok != PARAM {
				return nil, fmt.Errorf("encountered \\begin without parameter in line %d", cnt)
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
			return nil, fmt.Errorf("found parameter %q without a command in line %d", lit, cnt)
			break

		case ILLEGAL:
			return nil, fmt.Errorf("found %q in line %d, expected known keyword or Text", lit, cnt)
			break

		case EOF:
			return contentElementList, nil
			p.unscan()
			break

		default:
			return nil, fmt.Errorf("unexpected %q in line %d", lit, cnt)
		}

	}
}

func (p *Parser) parseBegin() (*ContentElement, error) {
	contentElement := &ContentElement{} //contains the actual data

	// Read parameter
	tok, lit, cnt := p.scanIgnoreWhitespace()
	if tok != PARAM {
		return nil, fmt.Errorf("Error, expected Parameter after \\begin in line %d", cnt)
	}
	if lit != "Regie" {
		log.Printf("Warning, found %q in line %d, expected Regie\n", lit, cnt)
		_, lit, _ := p.scanIgnoreWhitespace()
		log.Printf("Text: %q", lit)
		p.unscan()
	}

	contentElement.Type = lit
	element, error := p.parseText()
	if error != nil {
		return nil, error
	}

	tok, lit, _ = p.scanIgnoreWhitespace()
	if tok != END {
		return nil, fmt.Errorf("missing \\end")
	} else {
		tok, lit, _ = p.scanIgnoreWhitespace()
		if tok != PARAM {
			return nil, fmt.Errorf("missing \\end parameter")
		}
	}

	contentElement.Body = element.Body
	return contentElement, nil

}

// parseSetting parses a setting within the Latex file
func (p *Parser) parseSetting() (*ContentElement, error) {
	contentElement := &ContentElement{} //contains the actual data

	// Read parameter
	tok, lit, cnt := p.scanIgnoreWhitespace()
	//Token should be a "COMMAND" keyword.
	if tok == COMMAND {
		contentElement.Type = lit
	} else {
		return nil, fmt.Errorf("found %q in line %d, expected COMMAND", lit, cnt)
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
	tok, lit, cnt := p.scanIgnoreWhitespace()

	//Token should be a "COMMAND" keyword.
	if tok == TEXT {
		contentElement.Type = TYPE_TEXT
		contentElement.Body = lit
	} else {
		return nil, fmt.Errorf("found %q in line %d, expected TEXT", lit, cnt)
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
