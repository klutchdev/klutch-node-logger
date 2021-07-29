# Klutch Node Logger

![Screenshot](/screen-shot.png)

## Installation
```bash
npm i klutch-node-logger
```

## Usage

```typescript
import {
  log,
  clear,
  successLog,
  successIconLog,
  warnLog,
  warnIconLog,
  errorLog,
  errorIconLog,
  infoLog,
  infoIconLog,
  time,
  timeLog,
  timeEnd,
  table,
  stringify,
  parseJson,
} from "klutch-node-logger";

// Basic log
log("Log\n");

// Clear console/TTY
clear(); 

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

// Timer
time('update'); // Time an operation
timeLog('update', operation); // Log a specific operation 
timeEnd('update'); // Stop timing an operation

// Table
table([{ valueOne: 1, valueTwo: "2" }]);

// JSON
stringify({"valueOne": 1,"valueTwo": "2"}); // JSON to string
parseJson('{"valueOne": 1,"valueTwo": "2"}'); // Parse JSON string

```