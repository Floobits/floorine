#floorine

Node.js logging thing.

### Usage:

    var log = require("floorine");

    log.set_log_level("debug");
    log.debug("debugging stuff: %s", os.platform());
    log.log("normal logging stuff");
    log.warn("uh oh");
    log.error("OH NO!")
