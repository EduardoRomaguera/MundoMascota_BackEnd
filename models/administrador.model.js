'use strict';
const mongoose = require('mongoose');

const schema_administrador = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: true },
    estado: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    password: { type: String, reqired: true, unique: false },
});

module.exports = mongoose.model('Administrador', schema_administrador, 'administrador');
