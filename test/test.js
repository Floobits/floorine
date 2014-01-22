var log = require('../lib/log');

log.set_log_level("debug");
log.debug("debug");
log.info("info");
log.log("log");
log.warn("warn");
log.error("error");

try {
  throw new Error("asdf");
} catch (e) {
  log.log("Logging exception...");
  log.error(e);
  log.log("All done!");
}
