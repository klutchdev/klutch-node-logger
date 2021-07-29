"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoIcon = exports.errorIcon = exports.warnIcon = exports.logIcon = void 0;
const icons_1 = require("./icons");
const logIcon = (msg) => console.log(icons_1.iconSuccess, msg);
exports.logIcon = logIcon;
const warnIcon = (msg) => console.warn(icons_1.iconWarn, msg);
exports.warnIcon = warnIcon;
const errorIcon = (msg) => console.error(icons_1.iconError, msg);
exports.errorIcon = errorIcon;
const infoIcon = (msg) => console.info(icons_1.iconInfo, msg);
exports.infoIcon = infoIcon;
//# sourceMappingURL=basicIconLogs.js.map