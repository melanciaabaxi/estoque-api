export default function (req,res,next) {
    ///console.log(`Um requisição foi feita: body: ${req.body.nome}, params: ${req.params}`)
    
    const inicio = Date.now();
    res.on('finish', ()  => {
        const duracao = Date.now() - inicio;
        const mensagem = `[LOG] ${req.method} ${req.url}- Status: ${res.statusCode} (${duracao}ms)`;
        console.log(mensagem);

    })
    
    next()
}