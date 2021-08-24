import logSymbols from 'log-symbols';
import chalk from 'chalk';

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
function log(msg) {
    console.log(msg);
}
function warn(msg) {
    console.warn(msg);
}
function error(msg) {
    console.error(msg);
}
function info(msg) {
    console.info(msg);
}
function table(obj) {
    console.table(obj);
}
function time(label) {
    console.time(label);
}
function timeEnd(label) {
    console.timeEnd(label);
}
function timeLog(label, operation) {
    console.timeLog(label, operation);
}
function clear() {
    console.clear();
}
function successLog(msg) {
    log(green(msg));
}
function warnLog(msg) {
    warn(yellow(msg));
}
function errorLog(msg) {
    error(red(msg));
}
function infoLog(msg) {
    info(blue(msg));
}
function successIconLog(msg) {
    log(green(iconSuccess, msg));
}
function warnIconLog(msg) {
    warn(yellow(iconWarn, msg));
}
function errorIconLog(msg) {
    error(red(iconError, msg));
}
function infoIconLog(msg) {
    info(blue(iconInfo, msg));
}
function stringify(obj) {
    log(JSON.stringify(obj, null, 2));
}
function parseJson(str) {
    log(JSON.parse(str));
}

export { clear, error, errorIconLog, errorLog, info, infoIconLog, infoLog, log, parseJson, stringify, successIconLog, successLog, table, time, timeEnd, timeLog, warn, warnIconLog, warnLog };
