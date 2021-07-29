// export { log, warn, error, info } from "./logger/basicLogs";
// export { successLog, warnLog, errorLog, infoLog } from "./logger/colorLogs";
// export { logIcon, warnIcon, errorIcon, infoIcon } from "./logger/basicIconLogs";
// export {
//   successIconLog,
//   warnIconLog,
//   errorIconLog,
//   infoIconLog,
// } from "./logger/colorIconLogs";
// export * from "./logger/basicLogs";
// export * from "./logger/colorLogs";
// export * from "./logger/basicIconLogs";
// export * from "./logger/colorIconLogs";
import { successLog, warnLog, errorLog, infoLog } from "klutch-node-logger";

successLog("Success");
warnLog("Warning");
errorLog("Error");
infoLog("Info");
