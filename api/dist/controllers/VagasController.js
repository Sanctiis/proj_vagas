"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VagasService_1 = require("../services/VagasService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class VagasController {
    get(req, res) {
        VagasService_1.default.get()
            .then(vagas => helper_1.default.sendRes(res, HttpStatus.OK, vagas))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        VagasService_1.default.getById(_id)
            .then(vagas => helper_1.default.sendRes(res, HttpStatus.OK, vagas))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    create(req, res) {
        let pb = req.body;
        VagasService_1.default.create(pb)
            .then(vagas => helper_1.default.sendRes(res, HttpStatus.OK, `${vagas} teste registrada`))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let vaga = req.body;
        VagasService_1.default.update(_id, vaga)
            .then(vagas => helper_1.default.sendRes(res, HttpStatus.OK, `${vagas} foi atualizada`))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        VagasService_1.default.delete(_id)
            .then(() => helper_1.default.sendRes(res, HttpStatus.OK, "Vaga removida"))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
}
exports.default = new VagasController();
