'use strict';
const express = require('express');
const Cliente = require('../models/cliente.model');
const router = express.Router();


router.post('/registrar-usuario', (req, res) => {
    let nuevoCliente = new Usuario({
        correo: req.body.correo,
        nombre: req.body.nombre,
        nacimiento: req.body.nacimiento,
        sexo: req.body.sexo,
        tipo: req.body.tipo,
        contrasenna: req.body.contrasenna,
        estado: req.body.estado
    });



    nuevoCliente.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el Cliente',
                error
            });
        } else {
            res.json({
                msj: 'El Cliente se registró adecuadamente'
            });
        }

    });

});