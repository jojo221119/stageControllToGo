package main

import (
	"net/http"

	"log"

	"github.com/gnampfelix/Dionysos/middleware"
	"github.com/julienschmidt/httprouter"
	"github.com/jojo221119/stageControllToGo/theaterTextHandler"
)

const port = "8080"

func main() {

	frontendRouter := middleware.NewRouter()
	frontendRouter.ServeFiles("/*filepath", http.Dir("assets"))

	apiRouter := middleware.NewRouter()
	apiRouter.GET("/api/scripts", theaterTextHandler.TextListHandler)
	apiRouter.GET("/api/scripts/:file", theaterTextHandler.TheaterTextFileHandler)
	apiRouter.GET("/api/scripts/:file/:page", theaterTextHandler.TheaterTextPaginationHandler)

	//Mock request for play activation
	apiRouter.POST("/api/plays/:play/scenes/:scene/activate", ActivateScene)

	middleware := middleware.Middleware{}

	middleware.Add(apiRouter, false)
	middleware.Add(frontendRouter, true)

	log.Printf("Starting server listen on localhost:" + port)

	log.Fatal(http.ListenAndServe(":"+port, Log(middleware)))
}

//Log takes a http Handler and logs the remoteAddr, the httpMethod and the request.
func Log(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s %s", r.RemoteAddr, r.Method, r.URL)
		handler.ServeHTTP(w, r)
	})
}

//ActivateScene activates the scene specified in the request.
func ActivateScene(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	playName := p.ByName("play")
	sceneName := p.ByName("scene")

	log.Printf("Activate scene: " + sceneName + " in play: " + playName + "\n")

	w.WriteHeader(http.StatusOK)

}
