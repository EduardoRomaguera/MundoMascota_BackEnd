'use strict';
const express = require('express');
const Vacuna = require('../models/vacunas.model');
const router = express.Router();



router.post('/registrar-vacuna', (req, res) => {
    let nuevaVacuna = new Vacuna({
        nombre: req.body.nombre,
        especie: req.body.especie,
        estado: req.body.estado
    });
    nuevaVacuna.save((error) => {
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

router.put('/modificar-vacuna', (req, res) => {
    Vacuna.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la vacuna',
                err
            });
        } else {
            res.json({
                msj: 'La vacuna se modificó correctamente'
            });
        }
    });

});

router.delete('/eliminar-vacuna', (req, res) => {
    Vacuna.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar la vacuna',
                error
            });
        } else {
            res.json({
                msj: 'La vacuna ha sido  eliminada'
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