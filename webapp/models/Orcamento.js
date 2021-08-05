const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Orcamento = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ramo: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    templates: {
        type: Array,
    },
    sugestao: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


mongoose.model('orcamentos', Orcamento)