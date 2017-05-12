package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"gitlab.mary-cap.de/VV/StageControllToGo/latex-parser/latex"

	"log"

	"github.com/gnampfelix/Dionysos/middleware"
	"github.com/julienschmidt/httprouter"
)

var theaterTextCache struct {
	path     string
	document latex.Document
}

func main() {

	frontendRouter := middleware.NewRouter()
	frontendRouter.ServeFiles("/*filepath", http.Dir("assets"))

	apiRouter := middleware.NewRouter()
	apiRouter.GET("/api/scripts", TextListHandler)
	apiRouter.GET("/api/scripts/:file", TheaterTextFileHandler)
	apiRouter.GET("/api/scripts/:file/:page", TheaterTextPaginationHandler)

	//Mock request for play activation
	apiRouter.POST("/api/plays/:play/scenes/:scene/activate", ActivateScene)

	middleware := middleware.Middleware{}

	middleware.Add(apiRouter, false)
	middleware.Add(frontendRouter, true)

	log.Fatal(http.ListenAndServe(":8080", middleware))
}

func TheaterTextFileHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	filePath := p.ByName("file") + ".txt"
	fmt.Print("Go Latex parser\n")
	fmt.Print("Parsing file ")
	fmt.Print(filePath + " ...\n")

	input, err := ioutil.ReadFile("./resources/" + filePath) //TODO fix problem with path
	if err != nil {
		fmt.Print(err.Error())
		http.Error(w, "The theater text could not be found. Please make sure it is availiable in the right directory", http.StatusNotFound)
		return
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		fmt.Print(err.Error())
		http.Error(w, "Error while parsing the theater text. Please make sure it is formated correctly", http.StatusInternalServerError)
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		fmt.Print(err.Error())
		http.Error(w, "Error while converting the theater text to json.", http.StatusInternalServerError)
		return
	}
	// in case no error occured
	w.Header().Set("Content-Type", "application/json")
	w.Write(parsedJSON)
}

func TextListHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	files, _ := ioutil.ReadDir("resources/")
	w.Header().Set("Content-Type", "application/json")
	var fileNames []string
	for _, file := range files {
		name := file.Name()[0 : len(file.Name())-4]
		fileNames = append(fileNames, name)
	}
	j, err := json.Marshal(fileNames)

	if err != nil {
		fmt.Print(err.Error())
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
		input, err := ioutil.ReadFile("./resources/" + filePath) //TODO fix problem with path
		if err != nil {
			fmt.Print(err.Error())
			http.Error(w, "The theater text could not be found. Please make sure it is availiable in the right directory", http.StatusNotFound)
			return
		}
		stmt, err = latex.NewParser(strings.NewReader(string(input))).Parse()
		if err != nil {
			fmt.Print(err.Error())
			http.Error(w, "Error while parsing the theater text. Please make sure it is formated correctly", http.StatusInternalServerError)
		}
		theaterTextCache.path = filePath
		theaterTextCache.document = *stmt
	}

	if page == "pages" {
		var pages []string
		for _, element := range theaterTextCache.document.Document {
			if len(element.Body) == 0 {
				continue
			}
			if element.Name == "" && element.Body[0].Type == "Seite" {
				pages = append(pages, element.Body[0].Body)
			}
		}
		parsedJSON, err := json.Marshal(pages)

		if err != nil {
			fmt.Print(err.Error())
			http.Error(w, "List of pagenumbers could not be parsed to json", http.StatusInternalServerError)
			return
		}
		w.Write(parsedJSON)
		return
	}

	var pageContent latex.Document
	keep := false
	for _, element := range theaterTextCache.document.Document {

		if len(element.Body) == 0 {
			continue
		}

		if element.Name == "" && element.Body[0].Type == "Seite" {
			body, err := strconv.Atoi(element.Body[0].Body)
			if err != nil {
				http.Error(w, "Seite with a non-integer value.", http.StatusInternalServerError)
				return
			}
			pg, err := strconv.Atoi(page)
			if err != nil {
				http.Error(w, "Invalid pagination parameter", http.StatusInternalServerError)
				return
			}

			if body == pg {
				keep = true
			} else if body > pg {
				fmt.Print(element.Name + element.Body[0].Type + element.Body[0].Body)
				break
			}
		}
		if keep {
			pageContent.Document = append(pageContent.Document, element)
		}
	}

	parsedJSON, err := json.Marshal(pageContent)
	if err != nil {
		fmt.Print(err.Error())
		http.Error(w, "Error while converting the theater text to json.", http.StatusInternalServerError)
		return
	}

	w.Write(parsedJSON)
}

//ActivateScene Comment
func ActivateScene(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	playName := p.ByName("play")
	sceneName := p.ByName("scene")

	fmt.Print("Activate scene: " + sceneName + " in play: " + playName + "\n")

	w.WriteHeader(http.StatusOK)

}
