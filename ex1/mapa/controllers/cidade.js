const mongoose = require('mongoose')
const cidade = require('../models/cidade')
var Cidade = require('../models/cidade')

module.exports.listarCidades = () => {
    return Cidade
        .find({}, {id:1 , nome:1, distrito:1})
        .exec()
}

module.exports.consultarCidade = id => {
    return Cidade
        .findOne({id: id}) // ir buscar a ocorrencia que tem este id
        .exec()
}

module.exports.listarPorNome = () => {
    return Cidade
        .find({}, {_id:0 , nome:1})
        .sort({nome: 1})
        .exec()
}

module.exports.listarPorDistrito = distrito => {
    var Distrito = new RegExp(distrito,'i')
    return Cidade
        .find({distrito: Distrito}, {_id:0, id:1, nome:1})
        .exec()
}

module.exports.listarDistritos = () => {
    return Cidade
        .distinct("distrito")
        .exec()
}