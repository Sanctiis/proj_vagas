"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Db {
    constructor() {
        this.DB_URL = 'mongodb://localhost:27017/vagas_db';
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Db;
