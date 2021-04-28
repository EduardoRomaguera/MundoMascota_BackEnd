'use strict';
const mongoose = require('mongoose');

const schema_tarjeta = mongoose.Schema({
    idUsuario: { type: String, requiered: true, unique: true },
    nombreTarjeta: { type: String, required: true, unique: false },
    numero: { type: Number, required: true, unique: false },
    mesExpiracion: { type: String, required: true, unique: false },
    annoExpiracion: { type: String, required: true, unique: false },
    codigoSeguridad: { type: Number, required: true, unique: false }

});
module.exports = mongoose.model('Tarjeta', schema_tarjeta, 'tarjetas');