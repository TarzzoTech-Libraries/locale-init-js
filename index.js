const currencyF = require("./currency-formatter");
const numberF = require("./number-formatter");
const datetimeF = require("./datetime-formatter");

module.exports = {
  currencyFormatter: (arg0, arg1, arg2) => {
    const price = arg0;
    let lang = "";
    let currencyString = "";
    let options = { lang, currencyString };
    if (typeof arg1 === "string") {
      lang = arg1;
      options.lang = arg1;
    } else if (typeof arg1 === "object") {
      options = arg1;
    }

    if (typeof arg2 === "string") {
      lang = arg2;
      options.currencyString = arg2;
    } else if (typeof arg2 === "object") {
      options = arg2;
    }
    return currencyF(price, options, "type");
  },
  numberFormatter: (number, lang, options) =>
    numberF(number, lang, "type", options),
  datetimeFormatter: (date, lang, options) => datetimeF(date, lang, options)
};
