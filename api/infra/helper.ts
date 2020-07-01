import { Request, Response } from 'express'
import { HttpStatus } from 'http-status';

class Helper {

  sendRes = function(res: Response, statusCode, data) {
    res.status(statusCode).json({result : data})
  }
}

export default new Helper();