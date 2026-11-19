
import dotenv from 'dotenv'
dotenv.config();



import express, { json, urlencoded } from 'express';
import {loggerMiddleware} from './src/middleware/index.js'
const app = express();
const port = 3000;

app.use(json()),

app.use(urlencoded({ extended: true }));

app.use(loggerMiddleware)
///app.use(valorProdutoMiddleware)

app.get('/', function(req,res){ 
    res.status(200).json({
            "status": "OK",
            "codigo": 200,
            "mensagem": `Bem Vindo`
        })
    });
    
    
    app.post('/produtos', (req,res) => { 
        let produto = req.body
        //res.send(`Produto foi criado!! Nome ${produto.nome}, Valor: ${produto.preco}`)
        res.status(201).json({
            "status": "Criado",
            "codigo": 201,
            "mensagem": `Produto foi criado!! Nome ${produto.nome}, Valor: ${produto.preco}`
        })
    });
    
    app.put('/produtos/:id',(req,res)=>{
        let id = req.params.id
        let produto = req.body
        //res.send(`O produto ${id} foi alterado!`)
        res.status(200).json({
            "status": "Alterado",
            "codigo": 200,
            "mensagem": `Produto ${id} foi alterado!! Nome ${produto.nome}, Valor: ${produto.preco}`
        })
    })
    
    app.delete('/produtos/:id', (req,res)=>{
        let id = req.params.id
        //res.send(`O produto ${id} foi alterado!`)
        res.status(200).json({
            "status": "Deletado",
            "codigo": 200,
            "mensagem": `O produto ${id} foi removido!!`
        })
    })
    
    app.listen(port, function(){
        console.log('Servidor rodando na porta' + port)});