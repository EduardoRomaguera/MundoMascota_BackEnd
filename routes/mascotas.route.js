'use strict';
const express = require('express');
const Tarjeta = require('../models/mascotas.model');
const router = express.Router();



router.post('/registrar-mascota', (req, res) => {
    let imagen = '';
    if (req.body.imagen) {
        imagen = req.body.imagen;
    }
    let nuevaTarjeta = new Tarjeta({
        correoUsuario: req.body.correoUsuario,
        nombre: req.body.nombre,
        especie: req.body.especie,
        raza: req.body.raza,
        estado: req.body.estado,
        imagen: imagen

    });
    nuevaTarjeta.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la mascota',
                error
            });
        } else {
            res.json({
                msj: 'La mascota se registró correctamente '
            });
        }
    });
});
module.exports = router;