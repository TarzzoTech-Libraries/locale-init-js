const { createHtmlElement, numberCheck } = require("../common/index");

const currentOptions = {
  lang: "en-US",
  currencyString: "USD"
};

module.exports = currencyFormatter = (
  price = 0,
  options = currentOptions,
  type
) => {
  switch (type) {
    case "html":
      return createHtmlElement(
        formatter(price, options.lang, options.currencyString)
      );

    default:
      return formatter(price, options.lang, options.currencyString);
  }
};

const formatter = (price, lang, currencyString) => {
  const language = lang || "en-US";
  const currency = currencyString || "USD";
  const priceValue = numberCheck(price);
  const result = new Intl.NumberFormat(language, {
    style: "currency",
    currencyDisplay: "symbol",
    currency: currency,
    useGrouping: true
  }).format(priceValue);
  return result;
};
