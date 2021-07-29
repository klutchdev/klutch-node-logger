"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoLog = exports.errorLog = exports.warnLog = exports.successLog = void 0;
var basicLogs_1 = require("./basicLogs");
var colors_1 = require("./colors");
var successLog = function (msg) { return basicLogs_1.log(colors_1.green(msg)); };
exports.successLog = successLog;
var warnLog = function (msg) { return basicLogs_1.warn(colors_1.yellow(msg)); };
exports.warnLog = warnLog;
var errorLog = function (msg) { return basicLogs_1.error(colors_1.red(msg)); };
exports.errorLog = errorLog;
var infoLog = function (msg) { return basicLogs_1.info(colors_1.blue(msg)); };
exports.infoLog = infoLog;
//# sourceMappingURL=colorLogs.js.map