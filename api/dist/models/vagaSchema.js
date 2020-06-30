"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const VagaSchema = new mongoose.Schema({
    cargo: { type: String },
    cidade: { type: String },
    escolaridade: { type: String },
    isActive: { type: String }
});
exports.default = VagaSchema;
