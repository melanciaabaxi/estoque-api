const valorProduto = function(req,res,next) {
    let preco = req.body.preco
    if (preco < 100) {
        res.send('Nao autorizado produto menor que 100')
    } else{
        next()
    }
}

module.exports= valorProduto