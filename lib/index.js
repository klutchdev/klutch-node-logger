"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoIconLog = exports.errorIconLog = exports.warnIconLog = exports.successIconLog = exports.infoLog = exports.errorLog = exports.warnLog = exports.successLog = exports.info = exports.error = exports.warn = exports.log = void 0;
var log_symbols_1 = __importDefault(require("log-symbols"));
var chalk_1 = __importDefault(require("chalk"));
// Colors
var green = chalk_1.default.green;
var yellow = chalk_1.default.yellow;
var red = chalk_1.default.red;
var blue = chalk_1.default.blueBright;
// Icons
var iconSuccess = log_symbols_1.default.success;
var iconWarn = log_symbols_1.default.warning;
var iconError = log_symbols_1.default.error;
var iconInfo = log_symbols_1.default.info;
function log(msg) {
    console.log(msg);
}
exports.log = log;
function warn(msg) {
    console.warn(msg);
}
exports.warn = warn;
function error(msg) {
    console.error(msg);
}
exports.error = error;
function info(msg) {
    console.info(msg);
}
exports.info = info;
function successLog(msg) {
    log(green(msg));
}
exports.successLog = successLog;
function warnLog(msg) {
    warn(yellow(msg));
}
exports.warnLog = warnLog;
function errorLog(msg) {
    error(red(msg));
}
exports.errorLog = errorLog;
function infoLog(msg) {
    info(blue(msg));
}
exports.infoLog = infoLog;
function successIconLog(msg) {
    log(green(iconSuccess, msg));
}
exports.successIconLog = successIconLog;
function warnIconLog(msg) {
    warn(yellow(iconWarn, msg));
}
exports.warnIconLog = warnIconLog;
function errorIconLog(msg) {
    error(red(iconError, msg));
}
exports.errorIconLog = errorIconLog;
function infoIconLog(msg) {
    info(blue(iconInfo, msg));
}
exports.infoIconLog = infoIconLog;
//# sourceMappingURL=index.js.map