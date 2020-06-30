"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VagasRepository_1 = require("../repositories/VagasRepository");
class VagasService {
    get() {
        return VagasRepository_1.default.find({});
    }
    getById(_id) {
        return VagasRepository_1.default.findById(_id);
    }
    create(vagas) {
    }
    update() { }
}
{
}
exports.default = new VagaService();
