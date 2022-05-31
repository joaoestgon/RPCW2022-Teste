var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var ligacaoSchema = new Schema({
    id: String,
    origem: String,
    destino: String,
    distancia: String
})

module.exports = mongoose.model('ligacoes',ligacaoSchema)