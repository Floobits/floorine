// TODO: tests

var log = require('../lib/log');

log.set_log_level("debug");
log.log("asdf");
log.debug("qwe");
log.warn("qwe");

try {
  throw new Error("asdf");
} catch (e) {
  log.error(e);
}
