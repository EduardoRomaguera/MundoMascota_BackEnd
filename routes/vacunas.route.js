'use strict';
const express = require('express');
const Vacuna = require('../models/vacunas.model');
const router = express.Router();



router.post('/registrar-vacuna', (req, res) => {
    let nueva_vacuna = new Vacuna({
        nombre: req.body.nombre,
        especie: req.body.especie,
        estado: 'Activo'
    });
    nueva_vacuna.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la vacuna',
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