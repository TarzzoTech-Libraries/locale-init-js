const { createHtmlElement, numberCheck } = require("../common/index");

module.exports = currencyFormatter = (price = 0, lang = "en-US", type, currencyString = "USD") => {
    switch (type) {
        case "html":
            return createHtmlElement(formatter(price, lang, currencyString));
    
        default:
            return formatter(price, lang, currencyString);
    }
};

const formatter = (price, lang, currencyString) => {
    const language = lang || "en-US";
    const currency = currencyString || "USD";
    const priceValue = numberCheck(price);
    const result = new Intl.NumberFormat(language, {
        style: 'currency',
        currencyDisplay: 'symbol',
        currency: currency,
        useGrouping: true
    }).format(priceValue);
    return result;
}