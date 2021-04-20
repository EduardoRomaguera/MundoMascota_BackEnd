'use strict';
const mongoose = require('mongoose');

const schema_especie = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('Especie', schema_especie, 'especies');