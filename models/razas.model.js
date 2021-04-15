'use strict';
const mongoose = require('mongoose');

const schema_raza = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    especie: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('Raza', schema_raza, 'razas');