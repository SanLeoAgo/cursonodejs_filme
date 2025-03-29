import salvarFilmeService from "../service/filme/salvarFilmeService.js"
import consultarFilmesService from "../service/filme/consultarFilmeService.js";
import { Router } from "express";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";

const endpoints=Router();

endpoints.post('/filme',async(req,resp)=>{
    try {

    let filmeObj=req.body;
    let id = await salvarFilmeService(filmeObj);

    resp.send({
        id:id
    });
    } catch (error) {
        logError(error);
        resp.status(400).send(criaError(error));
    }
});

endpoints.get('/filme',async(req,resp)=>{
    try {
        let nome = req.query.nome;

        let registros = await consultarFilmesService(nome);
 
        resp.send(registros);

    } catch (error) {
        logError(error);
        resp.status(400).send(criaError(error));
    }
});

endpoints.get('/filme/:id', async(req,resp)=>{
    try {

       let id = req.params.id;
       let filme = await consultarFilmePorIdService(id);
        resp.send(filme);
    } catch (error) {
        logError(error);
        resp.status(400).send(criaError(error));
    }
});

endpoints.put('/filme/:id',async(req, resp)=>{

    try { 
        
    //ler entradas
    let filmeObj = req.body;
    let id = req.params.id;

    //processamento service
    await alterarFilmeService(filmeObj,id);

    //saida response
    resp.status(204).send();
    } catch (error) {
        logError(error);
        resp.status(400).send(criaError(error));
    }
});

export default endpoints;