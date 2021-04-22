'use strict';
const express = require('express');
const Usuario = require('../models/cliente.model');
const mailTemplate = require('../templates/registro-cliente');
const router = express.Router();

router.post('/registrar-usuario-cliente', (req, res) => {
    let nuevoUsuarioCliente = new Usuario({
        nombre: req.body.nombre,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        tipoID: req.body.tipoId,
        identificacion: req.body.identificacion,
        nacimiento: req.body.nacimiento,
        correo: req.body.correo,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        sennas: req.body.sennas,
        tipo: 'Cliente',
        estado: 'Activo'
    });
    nuevoUsuarioCliente.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            mailTemplate.enviar_mail(req.body.nombre, req.body.correo);
            // res.json({
            //     msj: 'El usuario se registró adecuadamente'
            // });
        }
    });

});