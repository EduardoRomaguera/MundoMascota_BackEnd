'use strict';
const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    nacimiento: { type: Date, required: true, unique: false },
    sexo: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    contrasenna: { type: String, required: false, unique: false },
    estado: { type: String, required: true, unique: false }

});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');