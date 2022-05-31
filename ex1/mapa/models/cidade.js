var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var cidadeSchema = new Schema({
    id: String,
    nombre: String,
    população: Number,
    descrição: String,
    distrito: String
})

module.exports = mongoose.model('cidades',cidadeSchema)