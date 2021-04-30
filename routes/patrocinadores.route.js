'use strict';
const express = require('express');
const Patrocinador = require('../models/patrocinadores.model');
const router = express.Router();



router.post('/registrar-patrocinador', (req, res) => {
    let imagen = '';
    if (req.body.imagen) {
        imagen = req.body.imagen;
    }
    let nuevaPatrocinador = new Patrocinador({
        nombre: req.body.nombre,
        frase: req.body.frase,
        imagen: imagen,
    });

    nuevaPatrocinador.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el patrocinador',
                error
            });
        } else {
            res.json({
                msj: 'El patrocinador se ha registrado correctamente'
            });
        }
    });
});

router.get('/listar-patrocinadores', (req, res) => {
    Patrocinador.find((error, patrocinadores) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los patrocinadores',
                error
            });
        } else {
            res.json({
                patrocinadores
            });
        }
        console.log(patrocinadores);
    });
});


router.delete('/eliminar-patrociador', (req, res) => {
    Patrocinador.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el patrocinador',
                error
            });
        } else {
            res.json({
                msj: 'el patrocinador fue eliminado con exito'
            });
        }
    });
});

module.exports = router;