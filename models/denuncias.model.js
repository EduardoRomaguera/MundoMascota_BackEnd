'use strict';
const mongoose = require('mongoose');

const schema_denuncias = mongoose.Schema({
    denunciado: { type: String, required: true, unique: false },
    razon: { type: String, required: true, unique: false },
    explicacion: { type: String, required: true, unique: false },

});
module.exports = mongoose.model('denuncia', schema_denuncias, 'denuncias');