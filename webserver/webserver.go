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
	apiRouter.GET("/api/scripts", TextListHandler)
	apiRouter.GET("/api/scripts/:file", TheaterTextFileHandler)

	//Mock request for play activation
	apiRouter.POST("/api/plays/:play/scenes/:scene/activate", ActivateScene)

	middleware := middleware.Middleware{}

	middleware.Add(apiRouter, false)
	middleware.Add(frontendRouter, true)

	log.Fatal(http.ListenAndServe(":8080", middleware))
}

func TheaterTextFileHandler(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	filePath := p.ByName("file")
	fmt.Print("Go Latex parser\n")
	fmt.Print("Parsing file ")
	fmt.Print(filePath + ".txt ...\n")

	input, err := ioutil.ReadFile("./resources/" + filePath + ".txt") //TODO fix problem with path
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
		fmt.Print(err.Error())
		http.Error(w, "Could not get the list of theater texts!", http.StatusInternalServerError)
		return
	}
	w.Write(j)
}

//ActivateScene Comment
func ActivateScene(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	playName := p.ByName("play")
	sceneName := p.ByName("scene")

	fmt.Print("Activate scene: " + sceneName + " in play: " + playName + "\n")

	w.WriteHeader(http.StatusOK)

}
