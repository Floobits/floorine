# floorine

Node.js/io.js logging thing.

[![Build Status](https://travis-ci.org/Floobits/floorine.svg)](https://travis-ci.org/Floobits/floorine)

[![NPM version](https://badge.fury.io/js/floorine.svg)](http://badge.fury.io/js/floorine)


### Usage

All log statements log to stdout. Example output follows each log command.

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

Emoji will probably be rendered differently in your terminal.

### Configuration

The default log level is "log". Use `set_log_level()` to change it.

    var log = require("floorine");
    log.set_log_level("error");
    log.log("this will not be logged");
    log.error("...but this will be.");
    🔥  ERROR 2015-02-18 15:13:52 UTC ...but this will be.

You can also tweak some formatting options. By default, log statements contain an [emoji](https://en.wikipedia.org/wiki/Emoji) character indicating the level (▫️ , ▪️ , ⚠️ , 🔥) and terminal colors. Use `set_config()` to change these.

    var log = require("floorine");
    log.set_config({
      emoji: false,
      color: false,
    });
    log.log("boring.");
    log.warn("boring!");
    log.error("REALL BORING!");
        LOG 2015-02-18 15:13:52 UTC boring.
       WARN 2015-02-18 15:13:52 UTC boring!
      ERROR 2015-02-18 15:13:52 UTC REALLY BORING!

Values not given will remain unchanged.
