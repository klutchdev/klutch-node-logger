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

export function log(msg: string) {
  console.log(msg);
}
export function warn(msg: string) {
  console.warn(msg);
}
export function error(msg: string) {
  console.error(msg);
}
export function info(msg: string) {
  console.info(msg);
}
export function table(obj: object) {
  console.table(obj);
}
export function time(label: string) {
  console.time(label);
}
export function timeEnd(label: string) {
  console.timeEnd(label);
}
export function timeLog(label: string | "default", operation: void | any) {
  console.timeLog(label, operation);
}
export function clear() {
  console.clear();
}
export function successLog(msg: string) {
  log(green(msg));
}
export function warnLog(msg: string) {
  warn(yellow(msg));
}
export function errorLog(msg: string) {
  error(red(msg));
}
export function infoLog(msg: string) {
  info(blue(msg));
}
export function successIconLog(msg: string) {
  log(green(iconSuccess, msg));
}
export function warnIconLog(msg: string) {
  warn(yellow(iconWarn, msg));
}
export function errorIconLog(msg: string) {
  error(red(iconError, msg));
}
export function infoIconLog(msg: string) {
  info(blue(iconInfo, msg));
}
export function stringify(obj: object) {
  log(JSON.stringify(obj, null, 2));
}
export function parseJson(str: string) {
  log(JSON.parse(str));
}
