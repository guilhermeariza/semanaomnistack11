const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
















































































//rota/recurso

//metodos http
//get é buscar/listar informação no backend
//post é criar uma informação no backend
//put é alterar
//delete é deletar

/**
 * Tipos de parametros
 * Query: parametros nomeados enviados na rota apos o simbolo '?' (filtros, paginação)
 * route params: parametros utilizados para identificar recursos
 * request body: corpo da requisiçao utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, etc
  * noSQL: MongoDB, CouchDB, etc
  */

  /**
   * driver: SELECT * FROM users
   * query builder: table('users').select('*').where()
   */