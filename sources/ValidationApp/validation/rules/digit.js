"use strict";
var rules = require("../rules");
var util_1 = require("../util");
var defaultMessage = 'Veuillez saisir un entier.';
var name = "digit";
var formatter = function (value) {
    if (typeof value == "undefined" || value == null) {
        return "";
    }
    return value.toString();
};
exports.formatter = formatter;
var parser = function (value) {
    if (typeof value == "undefined") {
        return null;
    }
    else if (typeof value == "number") {
        return value;
    }
    else {
        var number = parseInt(value);
        if (0 == number) {
            return 0;
        }
        else if (number) {
            return number;
        }
        else {
            return null;
        }
    }
};
exports.parser = parser;
var validateView = function (value, params) {
    var success = false;
    var isEmpty = util_1.util.isEmptyVal(value);
    if (!isEmpty) {
        var regex = /^\d+$/;
        success = regex.test(value);
    }
    else {
        success = true;
    }
    return {
        success: success,
        message: defaultMessage
    };
};
exports.validateView = validateView;
var validateModel = function (value, params) {
    var success = false;
    if (util_1.util.isEmptyVal(value)) {
        success = true;
    }
    else if (typeof (value) == "number") {
        success = value % 1 === 0;
    }
    return {
        success: success,
        message: defaultMessage
    };
};
exports.validateModel = validateModel;
var rule = {
    name: name,
    validateView: validateView,
    validateModel: validateModel,
    parser: parser,
    formatter: formatter,
    priority: 600
};
rules.add(rule);
//# sourceMappingURL=digit.js.map