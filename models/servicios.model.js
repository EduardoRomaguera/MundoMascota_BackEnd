'use strict';
const mongoose = require('mongoose');

const schema_servicio = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    costo: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('Servicio', schema_servicio, 'servicios');