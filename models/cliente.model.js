'use strict';
const mongoose = require('mongoose');

const schema_cliente = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    apellido1: { type: String, required: true, unique: false },
    apellido2: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: true },
    tipoID: { type: String, required: true, unique: false },
    identificacion: { type: String, required: true, unique: true },
    estado: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    nacimiento: { type: Date, required: true, unique: false },
    provincia: { type: String, reqired: true, unique: false },
    canton: { type: String, reqired: true, unique: false },
    distrito: { type: String, reqired: true, unique: false },
    sennas: { type: String, reqired: true, unique: false },
    password: { type: String, reqired: true, unique: false },
});

<<<<<<< HEAD
module.exports = mongoose.model('Cliente', schema_cliente, 'clientes');
=======
module.exports = mongoose.model('cliente', schema_cliente, 'clientes');
>>>>>>> 8e98361d0129533f736e67be4de3fecc41fdb35c
