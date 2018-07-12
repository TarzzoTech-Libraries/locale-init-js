const {
    datetimeChecker
} = require("../common/index");

const defaultOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric', 
    timeZone: 'UTC',
    timeZoneName : 'short'
};

module.exports = datetimeFormatter = (date, lang = "en-US", options = defaultOptions) => {
    return formatter(date, lang, options);
};


const formatter = (date, lang, options) => {
    const language = lang || "en-US";
    const dateValue = datetimeChecker(date);
    let result = "";
    if (dateValue != "Invalid DateTime Format") {
        const dateObj = dateSeperator(dateValue);
        if (dateObj != "Invalid Type") {
            const value = new Date(Date.UTC(
                dateObj.year,
                dateObj.month,
                dateObj.date,
                dateObj.hr,
                dateObj.min,
                dateObj.sec
            ));
            result = new Intl.DateTimeFormat(language, options).format(value);
        } else {
            result = "Invalid DateTime Format";
        }
    } else {
        result = "Invalid DateTime Format";
    }    
    return result;
};

const dateSeperator = (value) => {
    if (typeof(value) == "object") {
        const dateValue = new Date(value);
        let date = dateValue.getDate();
        date = date.length == 1 ? "0" + date : date;
        let month = dateValue.getMonth();
        month = month.length == 1 ? "0" + month : month;
        const year = dateValue.getFullYear();
        let hr = dateValue.getHours();
        hr = hr.length == 1 ? "0" + hr : hr;
        let min = dateValue.getMinutes();
        min = min.length == 1 ? "0" + min : min;
        let sec = dateValue.getSeconds();
        sec = sec.length == 1 ? "0" + sec : sec;
        const output = {
            date,
            month,
            year,
            hr,
            min,
            sec
        };
        return output;
    } else if (typeof(value) == "string") {
        // formate type should be mm/dd/yyyy or mm-dd-yyyy
        if (value.indexOf("/") > -1) {
            const dateValue = value.split(" ")[0];
            const separatedValue = dateValue.split("/");
            let date = separatedValue[1];
            date = date.length == 1 ? "0" + date : date;
            let month = separatedValue[0];
            if (Number.parseInt(month) > 12) {

            }
            month = month.length == 1 ? "0" + month : month;
            const year = separatedValue[2];
            const output = {
                date,
                month,
                year,
                hr: "00",
                min: "00",
                sec: "00"
            };
            return output;
        } else if (value.indexOf("-") > -1) {
            const dateValue = value.split(" ")[0];
            const separatedValue = dateValue.split("-");
            let date = separatedValue[1];
            date = date.length == 1 ? "0" + date : date;
            let month = separatedValue[0];
            month = month.length == 1 ? "0" + month : month;
            const year = separatedValue[2];
            const output = {
                date,
                month,
                year,
                hr: "00",
                min: "00",
                sec: "00"
            };
            return output;
        } else {
            return "Invalid Type";
        }
    } else {
        return "Invalid Type";
    }
};