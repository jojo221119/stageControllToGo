package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"gitlab.mary-cap.de/VV/StageControllToGo/latex-parser/latex"

	"log"

	"github.com/gnampfelix/Dionysos/middleware"
	"github.com/julienschmidt/httprouter"
)

func main() {

	frontendRouter := middleware.NewRouter()
	frontendRouter.ServeFiles("/*filepath", http.Dir("assets"))

	apiRouter := middleware.NewRouter()
	apiRouter.GET("/api/script", TheaterTextHandler)

	middleware := middleware.Middleware{}

	middleware.Add(apiRouter, false)
	middleware.Add(frontendRouter, true)

	log.Fatal(http.ListenAndServe(":8080", middleware))
}

// TheaterTextHandler : TODO add comment
func TheaterTextHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	fmt.Print("Go Latex parser\n")
	fmt.Print("Parsing file ...\n")
	input, err := ioutil.ReadFile("resources/text.txt") //TODO fix problem with path
	if err != nil {
		http.Error(w, "The theater text could not be found. Please make sure it is availiable in the right directory", http.StatusNotFound)
		return
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		http.Error(w, "Error while parsing the theater text. Please make sure it is formated correctly", http.StatusInternalServerError)
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		http.Error(w, "Error while converting the theater text to json.", http.StatusInternalServerError)
		return
	}
	// in case no error occured
	w.Header().Set("Content-Type", "application/json")
	w.Write(parsedJSON)
}