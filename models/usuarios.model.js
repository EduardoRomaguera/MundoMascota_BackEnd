'use strict';
const mongoose = require('mongoose');

<<<<<<< Updated upstream
const schema_usuario = mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    nacimiento: { type: Date, required: true, unique: false },
    sexo: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    contrasenna: { type: String, required: false, unique: false },
    estado: { type: String, required: true, unique: false }
=======
const schema_usuario = new mongoose.Schema({
nombreNegocio : {type: String, required: true, unique: false},
nombre : {type: String, required: true, unique: false},
apellido1 : {type: String, required: true, unique: false},
apellido2 : {type: String, required: true, unique: false},
identificacion : {type: String, required: true, unique: true},
tipo : {type: String, required: true, unique: false},
contrasenna : {type: String, required: false, unique: false},
estado : {type: String, required: true, unique: false}
>>>>>>> Stashed changes

});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');