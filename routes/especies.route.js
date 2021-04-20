'use strict';
const express = require('express');
const Especie = require('../models/especies.model');
const router = express.Router();



router.post('/registrar-especie', (req, res) => {
    let nuevaEspecie = new Especie({
        nombre: req.body.nombre,
        estado: 'Activo'
    });
    nuevaEspecie.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la especie',
                error
            });
        } else {
            res.json({
                msj: 'La especie se registró correctamente'
            });
        }
    });
});


router.get('/listar-especies', (req, res) => {
    Especie.find((error, especies) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las especies',
                error
            });
        } else {
            res.json({
                especies
            });
        }
    });
});


module.exports = router;