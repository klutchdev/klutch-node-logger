"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoIconLog = exports.errorIconLog = exports.warnIconLog = exports.successIconLog = void 0;
var basicLogs_1 = require("./basicLogs");
var colors_1 = require("./colors");
var icons_1 = require("./icons");
var successIconLog = function (msg) { return basicLogs_1.log(colors_1.green(icons_1.iconSuccess, msg)); };
exports.successIconLog = successIconLog;
var warnIconLog = function (msg) { return basicLogs_1.warn(colors_1.yellow(icons_1.iconWarn, msg)); };
exports.warnIconLog = warnIconLog;
var errorIconLog = function (msg) { return basicLogs_1.error(colors_1.red(icons_1.iconError, msg)); };
exports.errorIconLog = errorIconLog;
var infoIconLog = function (msg) { return basicLogs_1.info(colors_1.blue(icons_1.iconInfo, msg)); };
exports.infoIconLog = infoIconLog;
//# sourceMappingURL=colorIconLogs.js.map