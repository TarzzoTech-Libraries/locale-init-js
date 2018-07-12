const {
    createHtmlElement,
    numberCheck
} = require("../common/index");

const defaultOptions = {
    useGrouping: true,
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21
};

module.exports = numberFormatter = (number = 0, lang = "en-US", type, options = defaultOptions) => {
    switch (type) {
        case "html":
            return createHtmlElement(formatter(number, lang, options));

        default:
            return formatter(number, lang, options);
    }
};

const formatter = (number, lang, options) => {
    const language = lang || "en-US";
    const numberValue = numberCheck(number);
    const result = new Intl.NumberFormat(language, options).format(numberValue);
    return result;
}