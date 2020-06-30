import * as express from 'express'
import Db from './infra/db'
import * as bodeParser from 'body-parser'
import VagasController from './controllers/VagasController'

class StartUp {
  public app: express.Application
  private bodyParser
  private db: Db

  constructor() {
    this.app = express()
    this.routes();
    this.db = new Db()
    this.db.createConnection()
    this.middleware()
  }

  middleware() {
    this.app.use(bodeParser.json())
    this.app.use(bodeParser.urlencoded({ extended: false }))
  }

  routes() {
    this.app.route('/').get((req,res) => {
      res.send({ versao: '0.0.1' })
    } )

    this.app.route('/api/v1/vagas').get(VagasController.get)
    this.app.route('/api/v1/vagas/:id').get(VagasController.getById)
    this.app.route('/api/v1/vagas').post(VagasController.create)
    this.app.route('/api/v1/vagas').put(VagasController.update)
    this.app.route('/api/v1/vagas').delete(VagasController.delete)

  }

  



}

export default new StartUp();
