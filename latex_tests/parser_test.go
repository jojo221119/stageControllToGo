package latex_tests

import (
	"encoding/json"
	"latex-parser/latex"
	"reflect"
	"strings"
	"testing"
)

// Ensure the parser can parse strings into Statement ASTs.
func TestParser_Parse(t *testing.T) {
	var tests = []struct {
		s    string
		stmt *latex.Document
		err  string
	}{
		// Single Setting
		{
			s: `\LangsameEinstellung{Es wird langsam hell}`,
			stmt: &latex.Document{
				ElementList: []latex.Element{&latex.Command{
					Type: "LangsameEinstellung",
					Body: "Es wird langsam hell",
				}},
			},
		},
		// complex Structure
		{
			s: `\begin{FIGARO} Ich könnte ihn aus rasender Eifersucht töten \end{FIGARO}`,
			stmt: &latex.Document{
				ElementList: []latex.Element{&latex.ComplexElement{
					Type: "Complex",
					Name: "FIGARO",
					Body: []latex.Element{&latex.Command{
						Type: "Text",
						Body: `Ich könnte ihn aus rasender Eifersucht töten `,
					},
					},
				}},
			},
		},

		// two complex Structures
		{
			s: `\begin{FIGARO} Ich könnte ihn aus rasender Eifersucht töten \end{FIGARO}
\begin{SUSANNE}
aber auch dieses Motiv gilt nur für Edelleute. 
\end{SUSANNE}
`,
			stmt: &latex.Document{
				ElementList: []latex.Element{
					&latex.ComplexElement{
						Type: "Complex",
						Name: "FIGARO",
						Body: []latex.Element{&latex.Command{
							Type: "Text",
							Body: `Ich könnte ihn aus rasender Eifersucht töten `,
						},
						},
					},
					&latex.ComplexElement{
						Type: "Complex",
						Name: "SUSANNE",
						Body: []latex.Element{&latex.Command{
							Type: "Text",
							Body: "aber auch dieses Motiv gilt nur für Edelleute. \n",
						},
						},
					},
				},
			},
		},

		// complex Structure
		{
			s: `\begin{BARTHOLO}
 \begin{Regie}zu Figaro\end{Regie}  Natternkopf und Otternschwanz! Ist 
dieser ungebildete Schweinskopf auch hier?
\end{BARTHOLO}`,
			stmt: &latex.Document{
				ElementList: []latex.Element{
					&latex.ComplexElement{
						Type: "Complex",
						Name: "BARTHOLO",
						Body: []latex.Element{
							&latex.ComplexElement{
								Type: "Complex",
								Name: "Regie",
								Body: []latex.Element{
									&latex.Command{
										Type: "Text",
										Body: `zu Figaro`,
									},
								},
							},
							&latex.Command{
								Type: "Text",
								Body: "Natternkopf und Otternschwanz! Ist \ndieser ungebildete Schweinskopf auch hier?\n",
							},
						},
					},
				},
			},
		},

		// Errors
		{s: `{foo}`, err: `found parameter "foo" without a command`},
	}

	for i, tt := range tests {
		stmt, err := latex.NewParser(strings.NewReader(tt.s)).Parse()
		if !reflect.DeepEqual(tt.err, errstring(err)) {
			t.Errorf("%d. %q: error mismatch:\n  exp=%s\n  got=%s\n\n", i, tt.s, tt.err, err)
		} else {
			if tt.err == "" && !reflect.DeepEqual(tt.stmt, stmt) {
				t.Errorf("%d. %q\n\nstmt mismatch:\n\nexp=%#v\n\ngot=%#v\n\n", i, tt.s, tt.stmt, stmt)
			}
			gotJSON, _ := json.Marshal(stmt)
			expectedJSON, _ := json.Marshal(tt.stmt)
			if string(expectedJSON) != string(gotJSON) {
				t.Errorf("%d. %q\n\njson mismatch:\n  exp=%s\n  got=%s\n\n", i, tt.s, string(expectedJSON), string(gotJSON))
			}

		}
	}
}

// errstring returns the string representation of an error.
func errstring(err error) string {
	if err != nil {
		return err.Error()
	}
	return ""
}
