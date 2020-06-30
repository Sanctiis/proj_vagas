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
        return VagasRepository_1.default.create(vagas);
    }
    update(_id, vagas) {
        return VagasRepository_1.default.findByIdAndUpdate(_id, vagas);
    }
    delete(_id) {
        return VagasRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new VagasService();
