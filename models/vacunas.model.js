'use strict';
const mongoose = require('mongoose');

const schema_vacuna = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    especie: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('Vacuna', schema_vacuna, 'vacunas');