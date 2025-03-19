import './utils/global.js';
import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
//importar os endpoints para a app
import adicionarRotas from './rotas.js';


const servidor=express();
servidor.use(cors());
servidor.use(express.json());
//configura os controllers
adicionarRotas(servidor);



const PORTA = process.env.PORTA;
servidor.listen(PORTA,()=>console.log(`A API FILMES subiu na porta ${PORTA}`));
 
