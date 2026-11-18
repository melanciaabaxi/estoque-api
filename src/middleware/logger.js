const logger = function (req,res,next) {
    console.log(`Um requisição foi feita: body: ${req.body.nome}, params: ${req.params}`)
    next()
}

module.exports = logger