const ErrorRespMiddleware = (error, req, res, next) =>{
    return res.status(500).send(error);
}

module.exports = ErrorRespMiddleware;