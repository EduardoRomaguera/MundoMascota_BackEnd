'use strict';
const express = require('express');
const Tarjeta = require('../models/tarjetas.model');
const router = express.Router();



router.post('/registrar-tarjeta', (req, res) => {
    let nuevaTarjeta = new Tarjeta({
        idUsuario: req.body.idUsuario,
        nombreTarjeta: req.body.nombreTarjeta,
        numero: req.body.numero,
        mesExpiracion: req.body,
        mesExpiracion,
        annoExpiracion: req.body.annoExpiracion,
        codigoSeguridad: req.body.codigoSeguridad,

    });
    nuevaTarjeta.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la tarjeta',
                error
            });
        } else {
            res.json({
                msj: 'La tarjeta se registró correctamente '
            });
        }
    });
});


router.get('/listar-tarjetas', (req, res) => {
    Tarjeta.find((error, tarjetas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las tarjetas',
                error
            });
        } else {
            res.json({
                tarjetas
            });
        }
    });
});

router.put('/modificar-tarjeta', (req, res) => {
    Servicio.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la tarjeta',
                err

            });
        } else {
            res.json({
                msj: 'La tarjeta se guardó correctamente'
            });
        }
    });

});

router.delete('/eliminar-tarjeta', (req, res) => {
    Tarjeta.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar la tarjeta',
                error
            });
        } else {
            res.json({
                msj: 'La tarjeta ha ha sido eliminado'
            });
        }
    });
});

module.exports = router;