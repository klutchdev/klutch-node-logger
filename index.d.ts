declare const log: (msg: string) => void;
declare const warn: (msg: string) => void;
declare const error: (msg: string) => void;
declare const info: (msg: string) => void;

declare const successLog: (msg: string) => void;
declare const warnLog: (msg: string) => void;
declare const errorLog: (msg: string) => void;
declare const infoLog: (msg: string) => void;

declare const logIcon: (msg: string) => void;
declare const warnIcon: (msg: string) => void;
declare const errorIcon: (msg: string) => void;
declare const infoIcon: (msg: string) => void;

declare const successIconLog: (msg: string) => void;
declare const warnIconLog: (msg: string) => void;
declare const errorIconLog: (msg: string) => void;
declare const infoIconLog: (msg: string) => void;

export { error, errorIcon, errorIconLog, errorLog, info, infoIcon, infoIconLog, infoLog, log, logIcon, successIconLog, successLog, warn, warnIcon, warnIconLog, warnLog };
