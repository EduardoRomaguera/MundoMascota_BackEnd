'use strict';
const express = require('express');
const Denuncia = require('../models/denuncias.model');
const router = express.Router();



router.post('/registrar-denuncia', (req, res) => {
    let nuevaDenuncia = new Denuncia({
        denunciado: req.body.denunciado,
        razon: req.body.razon,
        explicacion: req.body.explicacion,
    });
    nuevaDenuncia.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar su denuncia',
                error
            });
        } else {
            res.json({
                msj: 'La denuncia se ha realizado correctamente'
            });
        }
    });
});
module.exports = router;