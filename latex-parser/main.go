// latex-parser project main.go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"latex-parser/latex"
	"strings"
)

func main() {
	input, err := ioutil.ReadFile("input/figaro.txt")
	if err != nil {
		fmt.Print(err)
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		fmt.Print(err)
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		fmt.Print(err)
	}
	ioutil.WriteFile("input/json.json", parsedJSON, 0644)
}
