#!/bin/sh

JSLINT="node ./node_modules/jslint/bin/jslint.js"

$JSLINT \
--indent 2 \
--node \
lib/*.js test/*.js
