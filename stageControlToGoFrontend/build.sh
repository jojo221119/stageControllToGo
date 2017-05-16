#bin/sh

ng build

cp dist/* ../webserver/assets/ -r
