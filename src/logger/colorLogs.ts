import { log, warn, error, info } from "./basicLogs";
import { green, yellow, red, blue } from "./colors";

export const successLog = (msg: string) => log(green(msg));
export const warnLog = (msg: string) => warn(yellow(msg));
export const errorLog = (msg: string) => error(red(msg));
export const infoLog = (msg: string) => info(blue(msg));
