# **locale-init-js**

_version 1.0.0_

---

## Installation

```bash
    npm i --save locale-init-js

    below es6:
    const INITJS = require("locale-init-js");

    es6:
    import { currencyFormatter, numberFormatter, datetimeFormatter } from "locale-init-js";
```

## Examples:

### Currency Formatter:

```js
currencyFormatter();
// $0.00

currencyFormatter(120);
// $120.00

currencyFormatter(120, "fr");
// 120,00 $US

currencyFormatter(150, "", "EUR");
// €150.00

// Instead use
var options = { currencyString: "EUR" };
currencyFormatter(150, options);
// €150.00

currencyFormatter("1240", "fr");
// 1 240,00 $US

// Updated custom options
var options = { lang: "en-IN", currencyString: "INR" };
currencyFormatter(12347, options);
// ₹ 12,347.00
```

### Number Formatter:

```js
numberFormatter(12340);
// 12,340

numberFormatter(124630, "fr");
// 124 630

numberFormatter("124630242", "en-IN");
// 12,46,30,242
```

### Customize NumberFormatter:

Try your customized Number Format.

```js
var options = {
  useGrouping: true,
  minimumIntegerDigits: 1,
  minimumFractionDigits: 0, // min value 0
  maximumFractionDigits: 0, // max value 20
  minimumSignificantDigits: 1, // min value 1
  maximumSignificantDigits: 21 // max value 21
};

numberFormatter("124630242", "en-IN", options);
// 12,46,30,242
```

### DateTime Formatter:

```js
datetimeFormatter(new Date());
// Thursday, July 12, 2018, 4:30:57 PM UTC

datetimeFormatter(new Date("23-22-3012"));
// Invalid DateTime Format

datetimeFormatter(new Date(), "fr");
// jeudi 12 juillet 2018 à 16:30:57 UTC

datetimeFormatter("2/2/2018");
// Friday, March 2, 2018, 12:00:00 AM UTC

datetimeFormatter("12-23-2018");
// Wednesday, January 23, 2019, 12:00:00 AM UTC
```

### Customize DateTimeFormatter:

Try your customized DateTime Format.

```js
var options = {
  weekday: "long", // available values "narrow", "short", "long".
  year: "numeric", // available values "numeric", "2-digit".
  month: "long", // available values "numeric", "2-digit", "narrow", "short", "long".
  day: "numeric", // available values "numeric", "2-digit".
  hour: "numeric", // available values "numeric", "2-digit".
  minute: "numeric", // available values "numeric", "2-digit".
  second: "numeric", // available values "numeric", "2-digit".
  timeZone: "UTC",
  timeZoneName: "short" // available values "short", "long".
};

datetimeFormatter(new Date(), "fr", options);
// jeudi 12 juillet 2018 à 16:30:57 UTC
```
