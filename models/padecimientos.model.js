'use strict';
const mongoose = require('mongoose');

const schema_padecimiento = mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    especie: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});
module.exports = mongoose.model('Padecimiento', schema_padecimiento, 'padecimientos');