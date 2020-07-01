import VagasService from '../services/VagasService'
import * as HttpStatus from 'http-status'
import Helper from '../infra/helper'
import { Response, Request } from 'express'

class VagasController {

  get(req: Request, res: Response) {
    VagasService.get()
      .then(vagas => Helper.sendRes(res, HttpStatus.OK, vagas))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  getById(req: Request, res: Response) {
    const _id = req.params.id
    VagasService.getById(_id)
      .then(vagas => Helper.sendRes(res,HttpStatus.OK, vagas))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  create(req: Request, res: Response) {
    let pb = req.body
    VagasService.create(pb)
      .then(vagas => Helper.sendRes(res, HttpStatus.OK, `${vagas} teste registrada`))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  update(req: Request, res: Response) {
    const _id = req.params.id
    let vaga = req.body
    
    VagasService.update(_id, vaga)
      .then(vagas => 
        Helper.sendRes(res, HttpStatus.OK, `${vagas} foi atualizada`))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  delete(req: Request, res: Response) {
    const _id = req.params.id

    VagasService.delete(_id)
      .then( () => Helper.sendRes(res, HttpStatus.OK, "Vaga removida") )
      .catch(err => console.error.bind(console, `Error ${err}`))      
  }
}

export default new VagasController()