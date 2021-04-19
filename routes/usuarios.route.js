'use strict';
const express = require('express');
<<<<<<< Updated upstream
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
=======
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/registrar-usuario-proveedor', (req, res) => {

    let nuevoUsuarioProveedor = new Usuario({
        nombreNegocio: req.body.correo,
        nombre: req.body.nombre,
        apellido1: req.body.nacimiento,
        apellido2: req.body.sexo,
        identificacion: req.body.tipo,
        estado: 'Activo'
    });
    nuevoUsuarioProveedor.save((error) => {
>>>>>>> Stashed changes
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            res.json({
<<<<<<< Updated upstream
                msj: 'El usuario se registró correctamente'
            });
        }
    });
});


=======
                msj: 'El usuario se registró adecuadamente'
            });
        }

    });

});
// Solo se ha modificado el registrar-usuario-proveedor, lo de abajo esta pendiente...
>>>>>>> Stashed changes
router.get('/listar-usuarios', (req, res) => {
    Usuario.find((error, usuarios) => {
        if (error) {
            res.json({
<<<<<<< Updated upstream
                msj: 'Ocurrió un error al listar las vacunas',
=======
                msj: 'Ocurrió un error al listar los usuarios',
>>>>>>> Stashed changes
                error
            });
        } else {
            res.json({
                usuarios
            });
        }
    });
});

<<<<<<< Updated upstream

=======
router.get('/buscar-usuario-id', (req, res) => {
    Usuario.findOne({ _id: req.query._id }, (error, usuario) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario',
                error
            });
        } else {
            res.json({
                usuario
            });
        }
    });
});

router.get('/buscar-usuario-correo', (req, res) => {
    Usuario.findOne({ correo: req.query.correo }, (error, usuario) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar el usuario',
                error
            });
        } else {
            res.json({
                usuario
            });
        }
    });
});

router.delete('/eliminar-usuario', (req, res) => {
    Usuario.deleteOne({ correo: req.body.correo }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuario eliminado correctamente'
            });
        }

    });
});

router.put('/modificar-usuario', (req, res) => {
    Usuario.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (error) => {
        if (error) {
            res.json({
                msj: 'El usuario no se pudo modificar',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se  modificó correctamente'
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
    // Pendiente de cambio de contraseña (cliente)

    Usuario.findOne({ correo: req.body.correo }, (error, usuario) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al buscar el usuario',
                error
            });
        } else {
            if (usuario) {
                if ((usuario.contrasenna == req.body.contrasenna)) {
                    res.json({
                        msj: 'Credenciales válidas',
                        estado: 'Encontrado',
                        usuario: {
                            correo: usuario.correo,
                            nombre: usuario.nombre,
                            nacimiento: usuario.nacimiento,
                            sexo: usuario.sexo,
                            tipo: usuario.tipo,
                            estado: usuario.estado
                        }
                    });
                } else {
                    res.json({
                        msj: 'Correo o contraseña incorrectos',
                        estado: 'No encontrado'
                    });
                }
            } else {
                res.json({
                    msj: 'Correo o contraseña incorrectos',
                    estado: 'No encontrado'
                });
            }

        }

    });

});
>>>>>>> Stashed changes
module.exports = router;