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

router.put('/modificar-especie', (req, res) => {
    let objEspecie = JSON.parse(req.body.obj);
    Especie.updateOne({ _id: objEspecie._id }, {
        $set: {
            nombre: objEspecie.nombre,
            estado: objEspecie.estado
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la especie',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});



module.exports = router;