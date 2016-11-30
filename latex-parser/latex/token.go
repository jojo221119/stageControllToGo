// token
package latex

type Token int

const (
	// Special Tokens
	ILLEGAL Token = iota
	EOF
	WS

	// Literals
	COMMAND
	TEXT
	PARAM

	//Misc Characters

	//Keywords
	BEGIN
	END
	PAGE
	EFFECT
)
