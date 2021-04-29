'use strict';
const mongoose = require('mongoose');

const schema_patrocinadores = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    frase: { type: String, required: true, unique: false },
    imagen: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('Patrocinador', schema_patrocinadores, 'patrocinadores');