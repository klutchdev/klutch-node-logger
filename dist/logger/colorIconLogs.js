"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoIconLog = exports.errorIconLog = exports.warnIconLog = exports.successIconLog = void 0;
const basicLogs_1 = require("./basicLogs");
const colors_1 = require("./colors");
const icons_1 = require("./icons");
const successIconLog = (msg) => basicLogs_1.log(colors_1.green(icons_1.iconSuccess, msg));
exports.successIconLog = successIconLog;
const warnIconLog = (msg) => basicLogs_1.warn(colors_1.yellow(icons_1.iconWarn, msg));
exports.warnIconLog = warnIconLog;
const errorIconLog = (msg) => basicLogs_1.error(colors_1.red(icons_1.iconError, msg));
exports.errorIconLog = errorIconLog;
const infoIconLog = (msg) => basicLogs_1.info(colors_1.blue(icons_1.iconInfo, msg));
exports.infoIconLog = infoIconLog;
//# sourceMappingURL=colorIconLogs.js.map