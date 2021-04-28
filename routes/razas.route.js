'use strict';
const express = require('express');
const Raza = require('../models/razas.model');
const router = express.Router();



router.post('/registrar-raza', (req, res) => {
    let nuevaRaza = new Raza({
        nombre: req.body.nombre,
        especie: req.body.especie,
        estado: 'Activo'
    });
    nuevaRaza.save((error) => {
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


router.put('/modificar-raza', (req, res) => {
    Raza.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la raza',
                err

            });
        } else {
            res.json({
                msj: 'La raza se modificó correctamente'
            });
        }
    });

});

router.delete('/eliminar-raza', (req, res) => {
    Raza.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar la raza',
                error
            });
        } else {
            res.json({
                msj: 'La raza ha sido eliminada'
            });
        }
    });
});
module.exports = router;