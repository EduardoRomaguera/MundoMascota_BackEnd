'use strict';
const mongoose = require('mongoose');

const schema_denuncias = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    usuarioBanear: { type: String, required: true, unique: false },
    razon: { type: String, required: true, unique: false },

});
module.exports = mongoose.model('Denuncia', schema_denuncias, 'Denuncias');