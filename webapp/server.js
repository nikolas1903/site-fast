//Carregando Módulos
  const express = require('express')
  const app = express()
  const path = require('path')
  const mongoose = require('mongoose')
  require('./models/Orcamento')
  const Orcamento = mongoose.model("orcamentos")


//Body Parser que não é mais Body Parser kkk
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



//Arrumando Refresh
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
app.use(staticFileMiddleware);


//Configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/studioweb', 
{ useNewUrlParser: true }).then(() => {
  console.log('Conectado com sucesso.')
}).catch((err) => {
  console.log('Não conectado. Erro: '+err)
})

// //Rota Inicial
app.route('/*')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

// //Rota de Criação de Orcamento
app.post('/sucesso', (req, res) => {
  const novoOrcamento = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    celular: req.body.celular,
    email: req.body.email,
    ramo: req.body.ramo,
    empresa: req.body.empresa,
    templates: req.body.templates,
    sugestao: req.body.sugestao
  }


  new Orcamento(novoOrcamento).save().then(() => {
    res.redirect('/sucesso')
    console.log('Orçamento salvo com sucesso no banco de dados.')
  }).catch((err) =>{
    console.log('Erro ao salvar o orçamento: '+err)
  })
});


//Configuração da porta p/ Heroku
var port = process.env.PORT || 8080
app.listen(port)
console.log('server started '+ port)

module.exports = app;