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
	ElementList []Element
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

// Parser represents a parser.
type Parser struct {
	s *Scanner
	// buffer to enable unread
	buf struct {
		tok Token  // last read token
		lit string // last read literal
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
	elementList, error := p.parse(true)
	stmt.ElementList = elementList
	if error == nil {
		return stmt, nil
	} else {
		return nil, error
	}
}

// parses a complex element or the root document. This function is recursive.
func (p *Parser) parse(isFirst bool) ([]Element, error) {
	elementList := make([]Element, INITIAL_LIST_SIZE)

	for {
		// scan next element
		tok, lit := p.scanIgnoreWhitespace()

		switch tok {
		case COMMAND:
			p.unscan()
			// parse command inclusive params
			element, error := p.parseCommand()
			if error != nil {
				return nil, error
			}
			// add command to the document
			elementList = append(elementList, element)
			break

		case TEXT:
			p.unscan()
			// parse text
			element, error := p.parseText()
			if error != nil {
				return nil, error
			}

			// add parsed text to the document
			elementList = append(elementList, element)
			break

		case BEGIN:
			// no unscann to support root case
			// parse complex element

			// scan next element to get the param Name
			tok, lit := p.scanIgnoreWhitespace()
			if tok != PARAM {
				return nil, fmt.Errorf("encountered \\begin without parameter")
			}
			complexElement := &ComplexElement{}
			complexElement.Type = COMPLEX_TYPE
			complexElement.Name = lit
			body, error := p.parse(false)
			if error != nil {
				return nil, error
			}
			complexElement.Body = body
			// add element to the document
			elementList = append(elementList, complexElement)
			break

		case END:
			// for complex elements
			if isFirst {
				return nil, fmt.Errorf("found \\end without begin")
			}
			// consume param and return
			p.scanIgnoreWhitespace()
			// Return the successfully parsed statement.
			return elementList, nil
			break

		case EOF:
			// Return the successfully parsed statement.
			return elementList, nil
			break

		case PARAM:
			// params should only occur after an command
			return nil, fmt.Errorf("found parameter %q without a command", lit)
			break
		case ILLEGAL:
			return nil, fmt.Errorf("found %q, expected known keyword or Text", lit)
			break
		default:
			return nil, fmt.Errorf("found %q, expected known keyword or Text", lit)
			break
		}
	}
	// input terminates with the EOF token
	return nil, fmt.Errorf("unexpected termination of loop")
}

// parseCommand parses a latex command
func (p *Parser) parseCommand() (*Command, error) {
	stmt := &Command{}

	// Read parameter
	tok, lit := p.scanIgnoreWhitespace()

	//Token should be a "COMMAND" keyword.
	if tok == COMMAND {
		stmt.Type = lit
	} else {
		return nil, fmt.Errorf("found %q, expected COMMAND", lit)
	}

	// Read parameter
	tok, lit = p.scanIgnoreWhitespace()
	if tok != PARAM {
		p.unscan()
	}
	stmt.Body = lit

	// Return the successfully parsed command.
	return stmt, nil
}

// parseText parses a latex text.
func (p *Parser) parseText() (*Command, error) {
	stmt := &Command{}

	// Read parameter
	tok, lit := p.scanIgnoreWhitespace()

	//Token should be a "COMMAND" keyword.
	if tok == TEXT {
		stmt.Type = TYPE_TEXT
		stmt.Body = lit
	} else {
		return nil, fmt.Errorf("found %q, expected COMMAND", lit)
	}

	// Return the successfully parsed text.
	return stmt, nil
}

// scan returns the next token from the underlying scanner.
// If a token has been unscanned then read that instead.
func (p *Parser) scan() (tok Token, lit string) {
	// If we have a token on the buffer, then return it.
	if p.buf.n != 0 {
		p.buf.n = 0
		return p.buf.tok, p.buf.lit
	}

	// Otherwise read the next token from the scanner.
	tok, lit = p.s.Scan()

	// Save it to the buffer in case we unscan later.
	p.buf.tok, p.buf.lit = tok, lit

	return
}

// scanIgnoreWhitespace scans the next non-whitespace token.
func (p *Parser) scanIgnoreWhitespace() (tok Token, lit string) {
	tok, lit = p.scan()
	if tok == WS {
		tok, lit = p.scan()
	}
	return
}

// unscan pushes the previously read token back onto the buffer.
func (p *Parser) unscan() { p.buf.n = 1 }
