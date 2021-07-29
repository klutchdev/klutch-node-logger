# Klutch Node Logger

![Screenshot](/screen-shot.png)

## Installation
```bash
npm i klutch-node-logger
```

## Usage

```typescript
// Use with TypeScript or JavaScript
import {
  log,
  successLog,
  warnLog,
  errorLog,
  infoLog,
  successIconLog,
  warnIconLog,
  errorIconLog,
  infoIconLog,
} from "klutch-node-logger";

// Standard log
log("Log\n");

// Success
successLog("Success");
successIconLog("Success w/icon\n");

// Warning
warnLog("Warning");
warnIconLog("Warning w/icon\n");

// Error
errorLog("Error");
errorIconLog("Error w/icon\n");

// Info
infoLog("Info");
infoIconLog("Info w/icon");
```