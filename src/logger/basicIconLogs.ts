import { iconSuccess, iconWarn, iconError, iconInfo } from "./icons";

export const logIcon = (msg: string) => console.log(iconSuccess, msg);
export const warnIcon = (msg: string) => console.warn(iconWarn, msg);
export const errorIcon = (msg: string) => console.error(iconError, msg);
export const infoIcon = (msg: string) => console.info(iconInfo, msg);
