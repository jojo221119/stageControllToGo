package latex_tests

import (
	"latex-parser/latex"
	"strings"
	"testing"
)

// Ensure the scanner can scan tokens correctly.
func TestScanner_Scan(t *testing.T) {
	var tests = []struct {
		s   string
		tok latex.Token
		lit string
	}{
		// Special tokens (EOF, ILLEGAL, WS)
		{s: ``, tok: latex.EOF},
		{s: `#`, tok: latex.ILLEGAL, lit: `#`},
		{s: ` `, tok: latex.WS, lit: " "},
		{s: "\t", tok: latex.WS, lit: "\t"},
		{s: "\n", tok: latex.WS, lit: "\n"},

		// Commands
		{s: `\foo`, tok: latex.COMMAND, lit: `foo`},
		{s: `\Zx12_3U_-`, tok: latex.COMMAND, lit: `Zx12_3U_`},

		// Text
		{s: `Hallo, wie gehts?`, tok: latex.TEXT, lit: `Hallo, wie gehts?`},

		// Keywords
		{s: `\begin`, tok: latex.BEGIN, lit: "begin"},
		{s: `\end`, tok: latex.END, lit: "end"},

		// Parameter
		{s: `{param}`, tok: latex.PARAM, lit: "param"},
	}

	for i, tt := range tests {
		s := latex.NewScanner(strings.NewReader(tt.s))
		tok, lit := s.Scan()
		if tt.tok != tok {
			t.Errorf("%d. %q token mismatch: exp=%q got=%q <%q>", i, tt.s, tt.tok, tok, lit)
		} else if tt.lit != lit {
			t.Errorf("%d. %q literal mismatch: exp=%q got=%q", i, tt.s, tt.lit, lit)
		}
	}
}
