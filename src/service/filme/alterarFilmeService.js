import { alterarFilme } from "../../repository/filmeRepository.js";
import { validarNovoFilme } from "../../validation/filme/filmeValidation.js";

export default async function  alterarFilmeService(filmeObj,id) {
    //valida campos obrigatários
    validarNovoFilme(filmeObj)
    let linhasAfetadas= await alterarFilme(filmeObj,id);
    if(linhasAfetadas == 0)
        throw new Error('Nenhuma linha afetada.');
};