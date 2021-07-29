"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoIcon = exports.errorIcon = exports.warnIcon = exports.logIcon = void 0;
var icons_1 = require("./icons");
var logIcon = function (msg) { return console.log(icons_1.iconSuccess, msg); };
exports.logIcon = logIcon;
var warnIcon = function (msg) { return console.warn(icons_1.iconWarn, msg); };
exports.warnIcon = warnIcon;
var errorIcon = function (msg) { return console.error(icons_1.iconError, msg); };
exports.errorIcon = errorIcon;
var infoIcon = function (msg) { return console.info(icons_1.iconInfo, msg); };
exports.infoIcon = infoIcon;
//# sourceMappingURL=basicIconLogs.js.map