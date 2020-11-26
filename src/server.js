const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const cors = require('cors');

//defifinido que a api vai receber parametro por url e aceitar requisisçoes json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
// app.use((req, res, next) => {
// 	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", '*');
//     //Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     app.use(cors());
//     next();
// });
// Esse cara que escreveu isso aki esta na disney
app.use(cors())

// importando os controllers
require('./app/controllers/authController')(app);
require('./app/controllers/recController')(app);
require('./app/controllers/artController')(app);

app.listen(8080, () => {
    console.log('Ok, API rodando na porta 8080')
})
