package theaterTextHandler

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/jojo221119/stageControllToGo/latex-parser/latex"
	"github.com/julienschmidt/httprouter"
)

var theaterTextCache struct {
	path     string
	document latex.Document
}

//TheaterTextFileHandler returns the requested theater text as json
func TheaterTextFileHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	filePath := p.ByName("file") + ".txt"
	log.Printf("Go Latex parser\n")
	log.Printf("Parsing file " + filePath + ".txt ...")

	input, err := ioutil.ReadFile("resources/" + filePath) //TODO fix problem with path
	if err != nil {
		log.Printf(err.Error())
		http.Error(w, "The theater text could not be found. Please make sure it is availiable in the right directory", http.StatusNotFound)
		return
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		log.Printf(err.Error())
		http.Error(w, "Error while parsing the theater text. Please make sure it is formated correctly", http.StatusInternalServerError)
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		log.Printf(err.Error())
		http.Error(w, "Error while converting the theater text to json.", http.StatusInternalServerError)
		return
	}
	// in case no error occured
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("charset", "utf-8")

	w.Write(parsedJSON)
}

//TextListHandler returns a list of all available theater textes as json
func TextListHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	files, _ := ioutil.ReadDir("resources/")
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("charset", "utf-8")

	var fileNames []string
	for _, file := range files {
		name := file.Name()[0 : len(file.Name())-4]
		fileNames = append(fileNames, name)
	}
	j, err := json.Marshal(fileNames)

	if err != nil {
		log.Printf(err.Error())
		http.Error(w, "Could not get the list of theater texts!", http.StatusInternalServerError)
		return
	}
	w.Write(j)
}

func TheaterTextPaginationHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")

	filePath := p.ByName("file") + ".txt"
	page := p.ByName("page")

	var stmt *latex.Document
	if theaterTextCache.path != filePath {
		input, err := ioutil.ReadFile("resources/" + filePath) //TODO fix problem with path
		if err != nil {
			log.Print(err.Error())
			http.Error(w, "The theater text could not be found. Please make sure it is availiable in the right directory", http.StatusNotFound)
			return
		}
		stmt, err = latex.NewParser(strings.NewReader(string(input))).Parse()
		if err != nil {
			log.Print(err.Error())
			http.Error(w, "Error while parsing the theater text. Please make sure it is formated correctly", http.StatusInternalServerError)
		}
		theaterTextCache.path = filePath
		theaterTextCache.document = *stmt
	}

	if page == "pages" {
		var pages []string
		for _, subelement := range theaterTextCache.document.Document {
			if len(subelement.Body) == 0 {
				continue
			}
			for _, body := range subelement.Body {
				if body.Type == "Seite" {
					pages = append(pages, body.Body)
				}
			}

		}
		parsedJSON, err := json.Marshal(pages)

		if err != nil {
			log.Print(err.Error())
			http.Error(w, "List of pagenumbers could not be parsed to json", http.StatusInternalServerError)
			return
		}
		w.Write(parsedJSON)
		return
	}

	var pageContent latex.Document
	keep := false
	lastpage := 0
	for _, element := range theaterTextCache.document.Document {

		// ignore empty elements that had been caused by \\ before support of this was added
		if len(element.Body) == 0 {
			continue
		}
		for _, subelement := range element.Body {
			if subelement.Type == "Seite" {
				body, err := strconv.Atoi(subelement.Body)
				if err != nil {
					http.Error(w, "Seite with a non-integer value.", http.StatusInternalServerError)
					return
				}
				pg, err := strconv.Atoi(page)
				if err != nil {
					http.Error(w, "Invalid pagination parameter", http.StatusInternalServerError)
					return
				}

				// check for page errors
				if body <= lastpage {
					http.Error(w, "Error with paging: page numbers are invalid or in wrong sequence", http.StatusInternalServerError)
					log.Printf("Encountered page number %d, but expected a number higher %d", body, lastpage)
					return
				} else {
					lastpage = body
				}

				if body == pg {
					keep = true
				} else {
					log.Print(element.Name + subelement.Type + subelement.Body)
					keep = false
					break
				}
			}
			if keep {
				pageContent.Document = append(pageContent.Document, element)
			}
		}

	}

	parsedJSON, err := json.Marshal(pageContent)
	if err != nil {
		log.Print(err.Error())
		http.Error(w, "Error while converting the theater text to json.", http.StatusInternalServerError)
		return
	}

	w.Write(parsedJSON)
}
