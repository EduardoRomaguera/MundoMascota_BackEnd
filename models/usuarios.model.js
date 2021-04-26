'use strict';
const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    nombreNegocio: { type: String, required: true, unique: false },
    nombre: { type: String, required: true, unique: false },
    apellido1: { type: String, required: true, unique: false },
    apellido2: { type: String, required: true, unique: false },
    tipoId: { type: String, required: true, unique: false },
    identificacion: { type: String, required: true, unique: true },
    nacimiento: { type: Date, required: true, unique: false },
    edad: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
    otrasSenas: { type: String, required: true, unique: false },
    horario: { type: String, required: true, unique: false },
    enlaceFacebook : { type: String, required: false, unique: false },
    enlaceInstagram : { type: String, required: false, unique: false },
    enlaceTiktok : { type: String, required: false, unique: false },
    tipo: { type: String, required: true, unique: false },
    password: { type: String, required: false, unique: false },
    estado: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');