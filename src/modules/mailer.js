const path = require('path')
const nodemailer = require('nodemailer')
const hbs =  require('nodemailer-express-handlebars')

//se necessario criar arquivo json para salvar configurções do transport
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1a190c92f96cd2",
    pass: "155dc4a45842e7"
  }
});

 
  module.exports = transport;