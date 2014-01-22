/* jshint node: true */
"use strict";

var util = require("util");

var strftime = require("strftime");

var log_levels = {
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  debug: 4
};

var log_colors = {
  0: "\x1b[31;1m",
  1: "\x1b[33;1m",
  2: "\x1b[32;1m",
  3: "\x1b[35;1m",
  4: "\x1b[34;1m"
};
var log_emoji = {
  // collision
  // 0: "\uD83D\uDCA5",
  // fire
  0: "\uD83D\uDD25",
  // warning sign
  1: "\u26A0\uFE0F",
  // Small black square
  2: "\u25AA\uFE0F",
  // Info box
  3: "\u2139\uFE0F",
  // Small white square
  4: "\u25AB\uFE0F"
};
var log_funcs = {
  error: console.error,
  warn: console.warn,
  log: console.log,
  info: console.log,
  debug: console.log
};
var log_names = {};


Object.keys(log_levels).forEach(function (key) {
  var value = log_levels[key];
  log_names[value] = util.format("  %s", key.toUpperCase()).slice(-5);
});

var log_level = log_levels.log;

var log = function (level_name, args) {
  var now = strftime('%F %T %Z'),
    log_str,
    level = log_levels[level_name];

  args = Array.prototype.slice.call(args);
  if (args.length === 0) {
    args.push("");
  }

  if (log_funcs[level_name] === undefined) {
    console.error("Invalid log level:", level_name);
    return;
  }

  if (level <= log_level) {
    log_str = util.format.apply(null, args);
    log_funcs[level_name](util.format("%s  %s%s \x1b[0m\x1b[40;1;30m%s\x1b[0m %s", log_emoji[level], log_colors[level], log_names[level], now, log_str));
    if (level === log_levels.error &&
        args[0] !== undefined &&
        args[0].stack !== undefined) {
      console.error(args[0].stack);
    }
  }
};

Object.keys(log_levels).forEach(function (key) {
  exports[key] = function f() {
    log(key, arguments);
  };
});

exports.set_log_level = function (new_log_level) {
  if (log_levels[new_log_level] === undefined) {
    throw new Error(util.format("%s is not a valid log level", new_log_level));
  }
  log_level = log_levels[new_log_level];
};
