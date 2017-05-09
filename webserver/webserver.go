package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"gitlab.mary-cap.de/VV/StageControllToGo/latex-parser/latex"

	"github.com/gin-contrib/static"
	"gopkg.in/gin-gonic/gin.v1"
)

func main() {
	router := gin.New()

	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	//TODO fix issue with middleware using old verison of main gin implementation
	router.Use(static.Serve("/ng/", static.LocalFile("../stageControlToGoFrontend/dist", true)))
	router.LoadHTMLGlob("../stageControlToGoFrontend/dist/index.html")

	router.GET("/", func(c *gin.Context) {
		c.Redirect(302, "/ng/")
	})

	ng := router.Group("/", Index)
	{
		ng.GET("/ng/*rest")
	}

	api := router.Group("/api")
	api.GET("/script", TheaterTextHandler)

	router.Run(":8080")
}

//Index : Serves Index page
func Index(c *gin.Context) {
	c.HTML(200, "index.html", gin.H{})
}

// TheaterTextHandler : TODO add comment
func TheaterTextHandler(c *gin.Context) {
	fmt.Print("Go Latex parser\n")
	fmt.Print("Parsing file ...\n")
	input, err := ioutil.ReadFile("resources/text.txt") //TODO fix problem with path
	if err != nil {
		c.String(http.StatusNotFound, "The theater text could not be found. Please make sure it is availiable in the right directory")
		return
	}
	stmt, err := latex.NewParser(strings.NewReader(string(input))).Parse()
	if err != nil {
		c.String(http.StatusInternalServerError, "Error while parsing the theater text. Please make sure it is formated correctly")
	}
	parsedJSON, err := json.Marshal(stmt)
	if err != nil {
		c.String(http.StatusInternalServerError, "Error while converting the theater text to json.")
		return
	}
	// in case no error occured
	c.String(http.StatusOK, string(parsedJSON))
}
