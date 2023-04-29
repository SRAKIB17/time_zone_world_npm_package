"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time_zone_country_by_code = exports.time_zone_country_by_name = exports.time_zone_specific = exports.time_zone_specific_all = exports.time_zone = exports.time_zone_with_value = void 0;
var time_zone_with_value_1 = require("./lib/time_zone_with_value");
Object.defineProperty(exports, "time_zone_with_value", { enumerable: true, get: function () { return time_zone_with_value_1.time_zone_with_value; } });
var time_zone_1 = require("./lib/time_zone");
Object.defineProperty(exports, "time_zone", { enumerable: true, get: function () { return time_zone_1.time_zone; } });
var time_zone_custom_1 = require("./lib/time_zone_custom");
Object.defineProperty(exports, "time_zone_specific_all", { enumerable: true, get: function () { return time_zone_custom_1.time_zone_specific_all; } });
var time_zone_country_1 = require("./lib/time_zone_country");
var time_zone_specific = function (_a) {
    var zone = _a.zone;
    return time_zone_custom_1.time_zone_specific_all.find(function (t) {
        if (t.zone == zone) {
            return true;
        }
        return false;
    });
};
exports.time_zone_specific = time_zone_specific;
var time_zone_country_by_name = function (_a) {
    var country_name = _a.country_name;
    return time_zone_country_1.time_zone_country_all.find(function (r) {
        return r.country.toLowerCase() == country_name.toLowerCase();
    });
};
exports.time_zone_country_by_name = time_zone_country_by_name;
var time_zone_country_by_code = function (_a) {
    var country_code = _a.country_code;
    return time_zone_country_1.time_zone_country_all.find(function (r) {
        return r.code.toLowerCase() == country_code.toLowerCase();
    });
};
exports.time_zone_country_by_code = time_zone_country_by_code;
