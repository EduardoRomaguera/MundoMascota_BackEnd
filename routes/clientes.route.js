'use strict';
const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente.model');
const mailTemplate = require('../templates/registros-clientes');

router.post('/registrar-usuario-cliente', (req, res) => {
    
    function letraRandom1() {
        let letra;
        let abecedario = "abcdefghijklmnopqrstuvwxyz";
        letra = abecedario[Math.floor(Math.random() * abecedario.length)];
        return letra;
    }

    function letraRandom2() {
        let letra;
        let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        letra = abecedario[Math.floor(Math.random() * abecedario.length)];
        return letra;
    }
    
    let password = "M"
    for (let i = 0; i < 2; i++) {
        let numero = Math.floor((Math.random() * 10) + 1);
        let letra = letraRandom1();
        let letraM = letraRandom2();
        password = password.concat(numero);
        password = password.concat(letra);
        numero = Math.floor((Math.random() * 10) + 1);
        password = password.concat(numero);
        password = password.concat(letraM);
    }
    console.log(password);

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
        password : password,
        tipo: 'Cliente',
        estado: 'Preactivo'
    });
    nuevoUsuarioCliente.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            mailTemplate.registro_cliente(req.body.nombre, req.body.correo, password);
            res.json({
                msj: 'El usuario se registró adecuadamente'
            });
        }
    });
});

router.post('/validar-credenciales', (req, res) => {
    // Estados
    // Pendiente de autorización (proveedor)
    // Activo
    // Inactivo
    // Bloqueado
    // preactivo = Pendiente de cambio de contraseña (cliente)

    Cliente.findOne({ correo: req.body.correo }, (error, usuario) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al buscar el usuario',
                error
            });
        } else {
            if (usuario) {
                if ((usuario.password == req.body.password)) {
                    res.json({
                        msj: 'Credenciales válidas',
                        estado: 'Encontrado',
                        usuario: {
                            correo: usuario.correo,
                            nombre: usuario.nombre,
                            // nacimiento: usuario.nacimiento,
                            // sexo: usuario.sexo,
                            // tipo: usuario.tipo,
                            estado: usuario.estado
                        }
                    });
                } else {
                    res.json({
                        msj: 'Correo1 o contraseña incorrectos',
                        estado: 'No encontrado'
                    });
                }
            } else {
                res.json({
                    msj: 'Correo2 o contraseña incorrectos',
                    estado: 'No encontrado'
                });
            }

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
            mailTemplate.registro_cliente(req.body.nombre, req.body.correo);
            res.json({
                msj: 'El usuario se registró adecuadamente'
            });
        }
    });
});

module.exports = router;