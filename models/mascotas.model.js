'use strict';
const mongoose = require('mongoose');

const schema_mascota = mongoose.Schema({
    correoUsuario: { type: String, requiered: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    especie: { type: String, required: true, unique: false },
    raza: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    imagen: { type: String, required: false, unique: false },
    vacunas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vacuna',
        required: false
    }],
    padecimientos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Padecimiento',
        required: false
    }]

});
module.exports = mongoose.model('Mascota', schema_mascota, 'mascotas');