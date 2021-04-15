'use strict';
const express = require('express');
const Raza = require('../models/razas.model');
const router = express.Router();



router.post('/registrar-raza', (req, res) => {
    let nueva_raza = new Raza({
        nombre: req.body.nombre,
        especie: req.body.expecie,
        estado: 'Activo'
    });
    nueva_raza.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la raza',
                error
            });
        } else {
            res.json({
                msj: 'La raza se registró correctamente'
            });
        }
    });
});


router.get('/listar-razas', (req, res) => {
    Raza.find((error, razas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las razas',
                error
            });
        } else {
            res.json({
                razas
            });
        }
    });
});
module.exports = router;