/* jshint node: true */
"use strict";

var log = require('../lib/log');

function test_logging() {
  log.log("Logging with config", log.config);
  log.set_log_level("debug");
  log.debug("debug");
  log.info("info");
  log.log("log");
  log.warn("warn");
  log.error("error");

  log.log("Logging an object:", {
    key: "value",
    other_key: "other_value",
  });

  try {
    throw new Error("asdf");
  } catch (e) {
    log.log("Logging an exception...");
    log.error(e);
  }

  log.log("All done!");
}

test_logging();

log.set_config({
  emoji: false,
  color: false,
});

test_logging();
