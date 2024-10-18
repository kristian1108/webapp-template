#!/bin/bash

esbuild src/app.js --bundle --watch --servedir=public --outfile=public/bundle.js --loader:.js=jsx