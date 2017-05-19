// latex-parser project main.go
package main

import (
	"gitlab.mary-cap.de/VV/StageControllToGo/latex-parser/latex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	fmt.Print("Go Latex parser\n")
	fmt.Print("Parsing file ...\n")
	input, err := ioutil.ReadFile("input/figaro.txt")

	if err != nil {
		fmt.Println(err)
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		fmt.Println(err)
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		fmt.Println(err)
	}
	ioutil.WriteFile("input/json.json", parsedJSON, 0644)
	fmt.Print("New JSON-File written to input/json.json\n")
}
