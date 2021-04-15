'use strict';
const express = require('express');
const vacunasModel = require('../models/vacunas.model');
const router = express.Router();
const Usuario = require('../models/vacunas.model');


router.post('/registrar-vacuna', (req, res) => {
    let nueva_vacuna = new vacunasModel({
        nombre: req.body.nombre,
        especie: req.body.expecie,
        estado: 'Activo'
    });
    nuevo_ejercicio.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al registrar la vacuna',
                error
            });
        } else {
            res.json({
                msj: 'La vacuna se registró correctamente'
            });
        }
    });
});


router.get('/listar-vacunas', (req, res) => {
    Vacuna.find((error, vacunas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las vacunas',
                error
            });
        } else {
            res.json({
                vacunas
            });
        }
    });
});
module.exports = router;