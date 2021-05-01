'use strict';
const express = require('express');
const Mascota = require('../models/mascotas.model');
const router = express.Router();



router.post('/registrar-mascota', (req, res) => {
    let imagen = '';
    if (req.body.imagen) {
        imagen = req.body.imagen;
    }
    let nuevaMascota = new Mascota({
        correoUsuario: req.body.correoUsuario,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        especie: req.body.especie,
        raza: req.body.raza,
        estado: 'Activo',
        imagen: req.body.imagen

    });
    nuevaMascota.save((error) => {
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