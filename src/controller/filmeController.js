import { Router } from "express";
import { salvarFilme } from "../repository/filmeRepository.js";
const endpoints=Router();

endpoints.post('/filme',async(req,resp)=>{
    //ler o objeto filme por completo
    let filmeObj=req.body;
    //passa o objeto como parâmetro para a função que salva o filme
    let id=await salvarFilme(filmeObj);
    resp.send({
        id:id
    });
});


export default endpoints;