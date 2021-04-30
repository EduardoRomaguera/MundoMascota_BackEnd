'use strict';
const mongoose = require('mongoose');

const schema_tarjeta = mongoose.Schema({
    correoUsuario: { type: String, requiered: true, unique: true },
    nombreTarjeta: { type: String, required: true, unique: false },
    numero: { type: String, required: true, unique: false },
    expiracion: { type: String, required: true, unique: false },
    codigoSeguridad: { type: Number, required: true, unique: false }

});
module.exports = mongoose.model('Tarjeta', schema_tarjeta, 'tarjetas');