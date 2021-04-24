'use strict';
const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente.model');
const mailTemplate = require('../templates/registros-clientes');

router.post('/registrar-usuario-cliente', (req, res) => {
    let nuevoUsuarioCliente = new Cliente({
        nombre: req.body.nombre,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        tipoID: req.body.tipoID,
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
            mailTemplate.registro_cliente(req.body.nombre, req.body.correo);
            res.json({
                msj: 'El usuario se registró adecuadamente'
            });
        }
    });
});

router.get('/listar-clientes', (req, res) => {
    Clientes.find((error, Clientes) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los clientes',
                error
            });
        } else {
            res.json({
                msj: 'Clientes registrados',
                Clientes
            });
        }
    });
});

module.exports = router;

