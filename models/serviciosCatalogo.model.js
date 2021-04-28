'use strict';
const mongoose = require('mongoose');

const schema_servicioCatalogo = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('ServicioCatalogo', schema_servicioCatalogo, 'serviciosCatalogo');