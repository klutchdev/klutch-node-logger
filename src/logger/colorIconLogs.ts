import { log, warn, error, info } from "./basicLogs";
import { green, yellow, red, blue } from "./colors";
import { iconSuccess, iconWarn, iconError, iconInfo } from "./icons";

export const successIconLog = (msg: string) => log(green(iconSuccess, msg));
export const warnIconLog = (msg: string) => warn(yellow(iconWarn, msg));
export const errorIconLog = (msg: string) => error(red(iconError, msg));
export const infoIconLog = (msg: string) => info(blue(iconInfo, msg));
