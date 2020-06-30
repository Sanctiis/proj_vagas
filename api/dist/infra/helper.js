"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    constructor() {
        this.sendRes = function (res, statusCode, date) {
            res.status(statusCode).json({ result: date });
        };
    }
}
exports.default = new Helper();
