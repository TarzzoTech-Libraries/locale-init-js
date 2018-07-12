module.exports = {
    numberCheck: (price) => {
        const priceType = typeof (price);
        if (priceType === "string") {
            return Number.parseFloat(price);
        } else if (priceType === "number") {
            return price;
        } else {
            return new Error("Invalid Type, price must be number or string");
        }
    },
    createHtmlElement: (value = "", elementType = "span") => {
        const element = `<${elementType}>${value}</${elementType}>`;
        return element;
    },
    datetimeChecker: (date) => {
        const dateType = typeof(date);
        if (dateType == "object" || dateType == "string") {
            if (date != "Invalid Date") {
                return date;
            } else {
                return "Invalid DateTime Format";
            }            
        } else {
            return "Invalid DateTime Format";
        }
    }
};