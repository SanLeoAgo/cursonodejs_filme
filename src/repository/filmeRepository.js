import con from './conection.js';

//Recebe como parâmetro um objeto filme

export async function salvarFilme(filme){
   
    let comando = `
    INSERT INTO tb_filme(nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                        VALUES( ?, ?, ?, ?, ?)
    `
    let resposta=await con.query(comando,[filme.nome,filme.sinopse,filme.avaliacao,filme.lancamento,filme.disponivel]);
    let info=resposta[0];

    let idFilme=info.insertId;
    return idFilme;
}; 

// export async function consultarFilmes(nome){


//     let comando= `
//     SELECT id_filme,
//             nm_filme,
//             vl_avaliacao,
//             dt_lancamento,
//             bt_disponivel
//         FROM tb_filme
//         WHERE nm_filme like ?
//     `
//                        maldito vc esqueceu de colocar uma vígula
//                                         ||
//                                         \/
//     let resposta= await con.query(comando['%'+ nome +'%']);
//     let registros = resposta[0];

//     return registros;

// };
export async function consultarFilmes(nome) {
    let comando = `
    SELECT id_filme as id,
           nm_filme as nome,
           ds_sinopse as sinopse,
           vl_avaliacao as avaliacao,
           dt_lancamento as lancamento,
           bt_disponivel as disponivel
      FROM tb_filme
     WHERE nm_filme LIKE ?
    `;

    let resposta = await con.query(comando, ['%' + nome + '%']);
    let registros = resposta[0];

    return registros;
};

export async function consultarFilmePorNome(nome) {
    let comando = `
    SELECT id_filme as id,
           nm_filme as nome,
           vl_avaliacao as avaliacao,
           dt_lancamento as lancamento,
           bt_disponivel as disponivel
      FROM tb_filme
     WHERE nm_filme = ?
    `;

    let resposta = await con.query(comando, [nome]);
    let registros = resposta[0];

    return registros;
};

export async function consultarFilmesPorId(id) {
    let comando = `
    SELECT id_filme as id,
           nm_filme as nome,
           ds_sinopse as sinopse,
           vl_avaliacao as avaliacao,
           dt_lancamento as lancamento,
           bt_disponivel as disponivel,
           img_filme as img
      FROM tb_filme
     WHERE id_filme = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
};

export async function alterarFilme(filme,id) {
    let comando = `
        UPDATE tb_filme
            SET nm_filme = ?,
                ds_sinopse = ?,
                vl_avaliacao = ?,
                dt_lancamento = ?,
                bt_disponivel = ?
            WHERE id_filme = ?;
  `;

  let resposta = await con.query(comando, [
    filme.nome,
    filme.sinopse,
    filme.avaliacao,
    filme.lancamento,
    filme.disponivel,
    id]);

    let info = resposta[0];
    let linhasAfetadas=info.affectedRows;

    return linhasAfetadas;
};

export async function deletarFilme(id) {
    let comando=`
    DELETE FROM tb_filme WHERE id_filme = ?
    `;
    let resposta =await con.query(comando,[id]);
    let info =resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
};

export async function alterarCapaFilme(id,caminho) {
    let comando = `
    UPDATE tb_filme
        SET img_filme = ?
        WHERE id_filme = ?;
`;

let resposta = await con.query(comando,[caminho,id]);
let info = resposta[0];
let linhasAfetadas=info.affectedRows;

return linhasAfetadas;
};
