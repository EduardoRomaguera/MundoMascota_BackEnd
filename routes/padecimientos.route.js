'use strict';
const express = require('express');
const Padecimiento = require('../models/padecimientos.model');
const router = express.Router();



router.post('/registrar-padecimiento', (req, res) => {
    let nuevoPadecimiento = new Padecimiento({
        nombre: req.body.nombre,
        especie: req.body.especie,
        estado: 'Activo'
    });
    nuevoPadecimiento.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el padecimiento',
                error
            });
        } else {
            res.json({
                msj: 'El padecimiento se registró correctamente'
            });
        }
    });
});


router.get('/listar-padecimientos', (req, res) => {
    Padecimiento.find((error, padecimientos) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los padecimientos',
                error
            });
        } else {
            res.json({
                padecimientos
            });
        }
    });
});


router.delete('/eliminar-padecimiento', (req, res) => {
    Padecimiento.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el padecimiento',
                error
            });
        } else {
            res.json({
                msj: 'El padecimiento ha sido eliminado'
            });
        }
    });
});
module.exports = router;