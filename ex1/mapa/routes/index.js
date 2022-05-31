var express = require('express');
const cidade = require('../models/cidade');
const ligacao = require('../models/ligacao');
var router = express.Router();

var Cidade = require('../controllers/cidade');
var Ligacao = require('../controllers/ligacao');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cidades', function(req, res, next) {
  if (req.query['distrito'] == undefined){
    Cidade.listarCidades()
    .then(dados => res.status(200).jsonp(dados))
    .catch(err => res.status(501).jsonp(err))
  }
  else {
    Cidade.listarPorDistrito(req.query['distritos'])
    .then(dados => res.status(200).jsonp(dados))
    .catch(err => res.status(502).jsonp(err))
  }
})

router.get('/cidades/nomes', function(req, res) {
  Cidade.listarPorNome()
  .then(dados => res.status(200).jsonp(dados))
  .catch(err => res.status(503).jsonp(err))
})

router.get('/cidades/:id', function(req, res) {
  Cidade.consultarCidade(req.params.id)
  .then(dados => res.status(200).jsonp(dados))
  .catch(err => res.status(504).jsonp({ erro: err }))
})

router.get('/distritos', function(err, req, res) {
  cidade.listarDistritos()
  .then(dados => res.status(200).jsonp(dados))
  .catch(err => res.status(505).jsonp(err))
});

module.exports = router;
