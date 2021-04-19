'use strict';
const mongoose = require('mongoose');

const schema_acciones = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    usuario: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    fecha: { type: Date, requiered: true, unique: false }
});
module.exports = mongoose.model('Accion', schema_acciones, 'acciones');