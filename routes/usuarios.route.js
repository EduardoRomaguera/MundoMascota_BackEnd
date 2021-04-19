'use strict';
const express = require('express');
const Usuario = require('../models/usuarios.model');
const router = express.Router();



router.post('/registrar-usuario', (req, res) => {
    let nuevoUsuario = new Usuario({
        correo: req.body.correo,
        nombre: req.body.nombre,
        nacimiento: req.body.nacimiento,
        sexo: req.body.sexo,
        tipo: req.body.tipo,
        contrasenna: req.body.contrasenna,
        estado: req.body.estado
    });
    nuevoUsuario.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se registró correctamente'
            });
        }
    });
});


router.get('/listar-usuarios', (req, res) => {
    Usuario.find((error, usuarios) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar las vacunas',
                error
            });
        } else {
            res.json({
                usuarios
            });
        }
    });
});


module.exports = router;