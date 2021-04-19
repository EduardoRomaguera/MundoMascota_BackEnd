'use strict';
const express = require('express');
const Accion = require('../models/acciones.model');
const router = express.Router();


router.post('/registrar-accion', (req, res) => {
    let nuevaAccion = new Accion({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        tipo: req.body.tipo,
        fecha: req.body.fecha
    });
    nuevaAccion.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al registrar la acción',
                error
            });
        } else {
            res.json({
                msj: 'La acción se registró correctamente'
            });
        }
    });
});


router.get('/listar-acciones', (req, res) => {
    Ejercicio.find((error, acciones) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las acciones',
                error
            });
        } else {
            res.json({
                acciones
            });
        }
    });
});

module.exports = router;