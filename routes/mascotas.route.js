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

router.get('/listar-mascotas', (req, res) => {
    Mascota.find((error, mascotas) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las mascotas',
                error
            });
        } else {
            res.json({
                mascotas
            });
        }
    });
});

router.put('/modificar-tarjeta', (req, res) => {
    Tarjeta.updateOne({ _id: req.body._id }, {
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