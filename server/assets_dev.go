// +build dev

package main

import (
	"log"
	"net/http"
)

func init() {
	log.Println("**dev mode**")
}

// Assets contains project assets.
var StaticAssets http.FileSystem = http.Dir("../views/dist")
