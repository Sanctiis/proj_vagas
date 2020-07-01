"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const VagasSchema = new mongoose.Schema({
    cargo: { type: String },
    cidade: { type: String },
    escolaridade: { type: String },
    isActive: { type: Boolean },
    timestamps: { type: Boolean }
});
exports.default = VagasSchema;
