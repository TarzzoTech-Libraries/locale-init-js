const currencyFormatter = require("./currency-formatter");
const numberFormatter = require("./number-formatter");
const datetimeFormatter = require("./datetime-formatter");

module.exports = {
    currencyFormatter: (price, lang, currencyString) => currencyFormatter(price, lang, "type", currencyString),
    numberFormatter: (number, lang, options) => numberFormatter(number, lang, "type", options),
    datetimeFormatter: (date, lang, options) => datetimeFormatter(date, lang, options)
}