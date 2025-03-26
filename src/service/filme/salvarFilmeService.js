import { salvarFilme,consultarFilmePorNome } from "../../repository/filmeRepository.js";
import { validarNovoFilme ,validarFilmeIgual} from "../../validation/filme/filmeValidation.js";

export default async function salvarFilmeService(filmeObj){
    //validação
    validarNovoFilme(filmeObj);
    //busca filmes com o mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome);
    //valida se existe filme com mesmo nome
    validarFilmeIgual(registros);

    //logica de negócio
    let id = await salvarFilme(filmeObj);
    return id;
};