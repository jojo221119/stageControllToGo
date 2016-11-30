package latex

import (
	"bufio"
	"bytes"
	"io"
)

// Scanner represents a lexical scanner.
type Scanner struct {
	r *bufio.Reader
}

// NewScanner returns a new instance of Scanner.
func NewScanner(r io.Reader) *Scanner {
	return &Scanner{r: bufio.NewReader(r)}
}

// Scan returns the next token and literal value.
func (s *Scanner) Scan() (tok Token, lit string) {
	// Read the next rune.
	ch := s.read()

	// If we see whitespace then consume all contiguous whitespace.
	// If we see a letter then consume as an ident or reserved word.
	// If we see a digit then consume as a number.
	if isWhitespace(ch) {
		s.unread()
		return s.scanWhitespace()
	} else if isBackslash(ch) {
		s.unread()
		return s.scanCommand()
	} else if ch == '{' {
		s.unread()
		return s.scanParameter()
	} else if isLetter(ch) || isTextElement(ch) || isDigit(ch) {
		s.unread()
		return s.scanText()
	}

	// Otherwise read the individual character.
	switch ch {
	case eof:
		return EOF, ""
	}

	return ILLEGAL, string(ch)
}

// scanWhitespace consumes the current rune and all contiguous whitespace.
func (s *Scanner) scanWhitespace() (tok Token, lit string) {
	// Create a buffer and read the current character into it.
	var buf bytes.Buffer
	buf.WriteRune(s.read())

	// Read every subsequent whitespace character into the buffer.
	// Non-whitespace characters and EOF will cause the loop to exit.
	for {
		if ch := s.read(); ch == eof {
			break
		} else if !isWhitespace(ch) {
			s.unread()
			break
		} else {
			buf.WriteRune(ch)
		}
	}

	return WS, buf.String()
}

// scanText consumes the current rune and all contiguous runes until a backslash occures.
func (s *Scanner) scanText() (tok Token, lit string) {
	// Create a buffer and read the current character into it.
	var buf bytes.Buffer
	buf.WriteRune(s.read())

	// Read every subsequent whitespace character into the buffer.
	// Non-whitespace characters and EOF will cause the loop to exit.
	for {
		if ch := s.read(); ch == eof {
			break
		} else if isBackslash(ch) {
			s.unread()
			break
		} else {
			buf.WriteRune(ch)
		}
	}

	return TEXT, buf.String()
}

// scanIdent consumes the current rune and all contiguous ident runes.
func (s *Scanner) scanCommand() (tok Token, lit string) {
	// Create a buffer and read the current character into it.
	var buf bytes.Buffer
	s.read() // consumme backslash
	//buf.WriteRune(s.read())

	// Read every subsequent command character into the buffer.
	// Non-command characters and EOF will cause the loop to exit.
	for {
		if ch := s.read(); ch == eof {
			break
		} else if !isLetter(ch) && !isDigit(ch) && ch != '_' {
			//if ch != '{' {
			s.unread()
			//}
			break
		} else {
			_, _ = buf.WriteRune(ch)
		}
	}

	// begin and end have to be handeld differently than regular commands
	switch buf.String() {
	case "begin":
		return BEGIN, buf.String()
	case "end":
		return END, buf.String()
	default:
		// Otherwise return as regular command
		return COMMAND, buf.String()
	}
}

func (s *Scanner) scanParameter() (tok Token, lit string) {
	var buf bytes.Buffer
	s.read() // consumme '{'

	// Non-command characters and EOF will cause the loop to exit.
	for {
		if ch := s.read(); ch == eof {
			break
		} else if ch == '}' {
			break
		} else {
			_, _ = buf.WriteRune(ch)
		}
	}

	// return result
	return PARAM, buf.String()
}

// read reads the next rune from the bufferred reader.
// Returns the rune(0) if an error occurs (or io.EOF is returned).
func (s *Scanner) read() rune {
	ch, _, err := s.r.ReadRune()
	if err != nil {
		return eof
	}
	return ch
}

// unread places the previously read rune back on the reader.
func (s *Scanner) unread() { _ = s.r.UnreadRune() }

// isWhitespace returns true if the rune is a space, tab, or newline.
func isWhitespace(ch rune) bool { return ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r' }

// isLetter returns true if the rune is a letter.
func isLetter(ch rune) bool { return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') }

// isTextElement returns true if the rune is a letter.
func isTextElement(ch rune) bool {
	return (ch == '(' || ch == ')' || ch == '.' || ch == ',' || ch == ':' || ch == ';' || ch == '?' || ch == '!' || ch == '�' || ch == '~' || ch == '\'' || ch == '`' || ch == '^' || ch == '"' || ch == '-')
}

// isDigit returns true if the rune is a digit.
func isDigit(ch rune) bool { return (ch >= '0' && ch <= '9') }

// isBackslash returns true if the rune is a latex command starting with backslash
func isBackslash(ch rune) bool { return (ch == '\\') }

// eof represents a marker rune for the end of the reader.
var eof = rune(0)
