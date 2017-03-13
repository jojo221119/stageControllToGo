package main

import (
	"fmt"
	"net/http"

	"StageControllToGo/latex-parser/latex"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"io/ioutil"
	"strings"
	"encoding/json"
)

func main() {
	fmt.Println("Initializing Webserver")
	router := mux.NewRouter()

	router.HandleFunc("/", HomeHandler)
	router.HandleFunc("/text", TheaterTextHandler)

	n := negroni.Classic() // Includes some default middlewares
	n.UseHandler(router)

	fmt.Println("Starting Webserver")
	http.ListenAndServe(":3000", n)
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Home Page"))
}

func TheaterTextHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Print("Go Latex parser\n")
	fmt.Print("Parsing file ...\n")
	input, err := ioutil.ReadFile("resources/text.txt")
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "The theater text could not be found. Please make sure it is availiable in the right directory")
		return
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "Error while parsing the theater text. Please make sure it is formated correctly")
		return
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "Error while converting the theater text to json.")
		return
	}


	// in case no error occured
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, string (parsedJSON))
}
