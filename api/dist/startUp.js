"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./infra/db");
const bodeParser = require("body-parser");
const VagasController_1 = require("./controllers/VagasController");
class StartUp {
    constructor() {
        this.app = express();
        this.routes();
        this.db = new db_1.default();
        this.db.createConnection();
        this.middleware();
    }
    middleware() {
        this.app.use(bodeParser.json());
        this.app.use(bodeParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route('/api/v1/vagas').get(VagasController_1.default.get);
        this.app.route('/api/v1/vagas/:id').get(VagasController_1.default.getById);
        this.app.route('/api/v1/vagas').post(VagasController_1.default.create);
        this.app.route('/api/v1/vagas').put(VagasController_1.default.update);
        this.app.route('/api/v1/vagas').delete(VagasController_1.default.delete);
    }
}
exports.default = new StartUp();
