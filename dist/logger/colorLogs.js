"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoLog = exports.errorLog = exports.warnLog = exports.successLog = void 0;
const basicLogs_1 = require("./basicLogs");
const colors_1 = require("./colors");
const successLog = (msg) => basicLogs_1.log(colors_1.green(msg));
exports.successLog = successLog;
const warnLog = (msg) => basicLogs_1.warn(colors_1.yellow(msg));
exports.warnLog = warnLog;
const errorLog = (msg) => basicLogs_1.error(colors_1.red(msg));
exports.errorLog = errorLog;
const infoLog = (msg) => basicLogs_1.info(colors_1.blue(msg));
exports.infoLog = infoLog;
//# sourceMappingURL=colorLogs.js.map