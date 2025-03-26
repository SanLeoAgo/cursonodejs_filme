  import mysql from 'mysql2/promise';

  const MYSQL_HOST=process.env.MYSQL_HOST;
  const MYSQL_USER=process.env.MYSQL_USER;
  const MYSQL_PWD=process.env.MYSQL_PWD;
  const MYSQL_DB=process.env.MYSQL_DB;

  let con=await mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD,
    database:process.env.MYSQL_DB,
    typeCast: function (field, next){

        if(field.type == 'TINY' && field.length == 1){
            return(field.string()== '1');
        }else if(field.type.includes('DECIMAL')){
          return Number(field.string());
        }else{
          return next();
        }
    }
    
  });

  console.log('--> Conexão com o BD realizada');

  export default con;