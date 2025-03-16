import 'dotenv/config.js';
import express from 'express';

const PORTA=process.env.PORTA;
const servidor=express();
servidor.listen(PORTA,()=>console.log(`A API subiu na porta ${PORTA}`));

servidor.get('/test',(req,resp)=>{
    resp.send('Servidor está OK');
});