package main

import (
	"encoding/json"
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

const port = "8080"

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

	log.Printf("Starting server listen on localhost:" + port)

	log.Fatal(http.ListenAndServe(":"+port, Log(middleware)))
}

func Log(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s %s", r.RemoteAddr, r.Method, r.URL)
		handler.ServeHTTP(w, r)
	})
}

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

//ActivateScene Comment
func ActivateScene(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	playName := p.ByName("play")
	sceneName := p.ByName("scene")

	log.Printf("Activate scene: " + sceneName + " in play: " + playName + "\n")

	w.WriteHeader(http.StatusOK)

}
