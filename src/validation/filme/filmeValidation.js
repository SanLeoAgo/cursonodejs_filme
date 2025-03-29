

export function validarNovoFilme(filmeObj){
    if(!filmeObj.nome)
        throw new Error('Nome do filme obrigatório');
    
    if(!filmeObj.sinopse)
        throw new Error('Sinopse do filme obrigatória');

    if(!filmeObj.avaliacao)
        throw new Error('Avaliacao do filme obrigatória');

    if(isNaN(filmeObj.avaliacao))
        throw new Error('Avaliacao do filme inválida');

    if(!filmeObj.lancamento)
        throw new Error('Lancamento do filme obrigatória');

    if(filmeObj.disponivel == undefined)
        throw new Error('Disponibilidade do filme obrigatória');
};

export function validarFilmeUnico(registros){
    if(registros.length == 0)
        throw new Error('Filme não encontrado');
};

export function validarFilmeIgual(registros){
    if( registros.length > 0)
        throw new Error('Já existe filme cadastrado com esse nome.');
};