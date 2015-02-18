# floorine

Node.js/io.js logging thing.

[![Build Status](https://travis-ci.org/Floobits/floorine.svg)](https://travis-ci.org/Floobits/floorine)

[![NPM version](https://badge.fury.io/js/floorine.svg)](http://badge.fury.io/js/floorine)


### Usage

    var log = require("floorine");

    log.set_log_level("debug");
    log.debug("debugging stuff: %s", os.platform());
    ▫️  DEBUG 2015-02-18 15:12:48 UTC debugging stuff: linux
    log.log("normal logging stuff");
    ▪️    LOG 2015-02-18 15:13:34 UTC normal logging stuff
    log.warn("uh oh");
    ⚠️   WARN 2015-02-18 15:13:44 UTC uh oh
    log.error("OH NO!");
    🔥  ERROR 2015-02-18 15:13:52 UTC OH NO!


### Configuration

The default log level is "log". Use `set_log_level()` to change it.

    var log = require("floorine");
    log.set_log_level("");

You can also tweak some formatting options. By default, log statements contain an emoji character indicating the level (▫️ , ▪️ , ⚠️ , 🔥) and terminal colors. Use `set_config()` to change these.

    var log = require("floorine");
    log.set_config({
      emoji: false,
      color: false,
    });

Values not given will remain unchanged.
