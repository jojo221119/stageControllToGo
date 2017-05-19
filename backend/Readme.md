**Webserver**

This is a simple webserver running on port 3000. Under the url */text* it will serve a json version of the theater text stored in *resources/text.txt*. To parse the file, the latex-parser package is used.

To run the server, make sure the project repository is within the go path and execute *go run webserver.go*.
