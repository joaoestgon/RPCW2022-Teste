const mongoose = require('mongoose')
const ligacao = require('../models/ligacao')
var Ligacao = require('../models/ligacao')

module.exports.listarPorOrigem = (Origem) => {
    return Ligacao
        .find({origem: Origem}, {_id : 1, origem : 1, destino : 1})
        .exec()
}

module.exports.listarPorDistancia = (distancia) => {
    return Ligacao
        .find({}, {_id : 1, origem : 1, destino : 1})
        .where('distancia').gte(distancia)
        .exec()
}