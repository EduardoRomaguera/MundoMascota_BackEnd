'use strict';
const express = require('express');
const Servicio = require('../models/servicios.model');
const router = express.Router();



router.post('/registrar-servicio', (req, res) => {
    let nuevoServicio = new Servicio({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        costo: req.body.costo
    });
    nuevoServicio.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el servicio',
                error
            });
        } else {
            res.json({
                msj: 'El servicio se registró correctamente '
            });
        }
    });
});


router.get('/listar-servicios', (req, res) => {
    Servicio.find((error, servicios) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los servicios',
                error
            });
        } else {
            res.json({
                servicios
            });
        }
    });
});

router.put('/modificar-servicio', (req, res) => {
    Servicio.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el servicio',
                err

            });
        } else {
            res.json({
                msj: 'El servicio se guardó correctamente'
            });
        }
    });

});

router.delete('/eliminar-servicio', (req, res) => {
    Servicio.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el servicio',
                error
            });
        } else {
            res.json({
                msj: 'El servicio ha sido eliminado'
            });
        }
    });
});

module.exports = router;