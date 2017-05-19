package main

import (
	"net/http"

	"log"

	"github.com/gnampfelix/Dionysos/api"
	"github.com/gnampfelix/Dionysos/middleware"
	"github.com/gnampfelix/Dionysos/storage"
	"github.com/jojo221119/stageControllToGo/backend/theaterTextHandler"
	"github.com/julienschmidt/httprouter"
)

const port = "8080"

func main() {
	api.Storage = storage.NewCacheStorge()

	frontendRouter := middleware.NewRouter()
	frontendRouter.ServeFiles("/*filepath", http.Dir("assets"))

	//requests for text api
	apiRouter := middleware.NewRouter()
	apiRouter.GET("/api/scripts", theaterTextHandler.TextListHandler)
	apiRouter.GET("/api/scripts/:file", theaterTextHandler.TheaterTextFileHandler)
	apiRouter.GET("/api/scripts/:file/:page", theaterTextHandler.TheaterTextPaginationHandler)

	//requests for controller api
	apiRouter.POST("/api/plays", api.AddNewPlay)
	apiRouter.PUT("/api/plays", api.AddPlayFromFile)
	apiRouter.GET("/api/plays", api.ListPlays)
	apiRouter.GET("/api/plays/:play", api.PrintPlay)
	apiRouter.POST("/api/plays/:play/transmissions", api.AddNewTransmission)
	apiRouter.GET("/api/plays/:play/transmissions", api.ListTransmissions)
	apiRouter.GET("/api/plays/:play/transmissions/:transmission", api.PrintTransmission)
	apiRouter.DELETE("/api/plays/:play/transmissions/:transmission", api.RemoveTransmission)

	apiRouter.POST("/api/plays/:play/transmissions/:transmission/devices", api.AddNewDevice)
	apiRouter.GET("/api/plays/:play/transmissions/:transmission/devices", api.ListDevices)
	apiRouter.GET("/api/plays/:play/transmissions/:transmission/devices/:device", api.PrintDevice)
	apiRouter.DELETE("/api/plays/:play/transmissions/:transmission/devices/:device", api.RemoveDevice)

	apiRouter.POST("/api/plays/:play/transmissions/:transmission/devices/:device/channels", api.AddNewDeviceChannel)
	apiRouter.GET("/api/plays/:play/transmissions/:transmission/devices/:device/channels", api.ListDeviceChannels)
	apiRouter.DELETE("/api/plays/:play/transmissions/:transmission/devices/:device/channels/:channel", api.RemoveDeviceChannel)

	apiRouter.POST("/api/plays/:play/states", api.AddNewState)
	apiRouter.GET("/api/plays/:play/states", api.ListStates)
	apiRouter.GET("/api/plays/:play/states/:state", api.PrintState)
	apiRouter.DELETE("/api/plays/:play/states/:state", api.RemoveState)

	apiRouter.POST("/api/plays/:play/scenes", api.AddNewScene)
	apiRouter.POST("/api/plays/:play/scenes/:scene/effects", api.AddNewEffect)
	apiRouter.DELETE("/api/plays/:play/scenes/:scene/effects/:effect", api.RemoveEffect)
	apiRouter.POST("/api/plays/:play/scenes/:scene/activate", api.ActivateScene)
	apiRouter.DELETE("/api/plays/:play/scenes/:scene", api.RemoveScene)

	//Mock request for play activation
	//apiRouter.POST("/api/plays/:play/scenes/:scene/activate", ActivateSetting)

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

//ActivateSetting activates the setting specified in the request
func ActivateSetting(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	playName := p.ByName("play")
	settingName := p.ByName("scene")

	//Hier Eventhandler aufrufen
	//evef.ActivateSetting(settingName)
	log.Printf("Activate scene: " + settingName + " in play: " + playName + "\n")

	w.WriteHeader(http.StatusOK)

}
