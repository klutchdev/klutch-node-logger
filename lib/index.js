import logSymbols from "log-symbols";
import chalk from "chalk";
// Colors
const green = chalk.green;
const yellow = chalk.yellow;
const red = chalk.red;
const blue = chalk.blueBright;
// Icons
const iconSuccess = logSymbols.success;
const iconWarn = logSymbols.warning;
const iconError = logSymbols.error;
const iconInfo = logSymbols.info;
export function log(msg) {
    console.log(msg);
}
export function warn(msg) {
    console.warn(msg);
}
export function error(msg) {
    console.error(msg);
}
export function info(msg) {
    console.info(msg);
}
export function table(obj) {
    console.table(obj);
}
export function time(label) {
    console.time(label);
}
export function timeEnd(label) {
    console.timeEnd(label);
}
export function timeLog(label, operation) {
    console.timeLog(label, operation);
}
export function clear() {
    console.clear();
}
export function successLog(msg) {
    log(green(msg));
}
export function warnLog(msg) {
    warn(yellow(msg));
}
export function errorLog(msg) {
    error(red(msg));
}
export function infoLog(msg) {
    info(blue(msg));
}
export function successIconLog(msg) {
    log(green(iconSuccess, msg));
}
export function warnIconLog(msg) {
    warn(yellow(iconWarn, msg));
}
export function errorIconLog(msg) {
    error(red(iconError, msg));
}
export function infoIconLog(msg) {
    info(blue(iconInfo, msg));
}
export function stringify(obj) {
    log(JSON.stringify(obj, null, 2));
}
export function parseJson(str) {
    log(JSON.parse(str));
}
//# sourceMappingURL=index.js.map