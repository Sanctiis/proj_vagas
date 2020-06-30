class Helper {

  sendRes = function(res,statusCode,date) {
    res.status(statusCode).json({result : date})
  }
}

export default new Helper();