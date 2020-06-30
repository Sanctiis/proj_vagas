"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const VagasSchema_1 = require("../models/VagasSchema");
exports.default = mongoose.model('vagas', VagasSchema_1.default);
