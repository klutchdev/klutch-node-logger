var __createBinding = (undefined && undefined.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (undefined && undefined.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// export { log, warn, error, info } from "./logger/basicLogs";
// export { successLog, warnLog, errorLog, infoLog } from "./logger/colorLogs";
// export { logIcon, warnIcon, errorIcon, infoIcon } from "./logger/basicIconLogs";
// export {
//   successIconLog,
//   warnIconLog,
//   errorIconLog,
//   infoIconLog,
// } from "./logger/colorIconLogs";
__exportStar(require("./logger/basicLogs"), exports);
__exportStar(require("./logger/colorLogs"), exports);
__exportStar(require("./logger/basicIconLogs"), exports);
__exportStar(require("./logger/colorIconLogs"), exports);
// import { successLog, warnLog, errorLog, infoLog } from "klutch-node-logger";
// successLog("Success");
// warnLog("Warning");
// errorLog("Error");
// infoLog("Info");
