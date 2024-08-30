#!/bin/sh
compile() {
	cd -- "$1"
	
	npm i --save-dev @types/node
	npm i readline-sync
	npx tsc src/index.ts

	cd -- ".."
}

compile e1
compile e2
compile e3
compile e4
compile e5
