'use strict';
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios.model');
const mailTemplate = require('../templates/registros-clientes');

router.post('/registrar-usuario-proveedor', (req, res) => {

    let nuevoUsuarioProveedor = new Usuario({
        nombreNegocio: req.body.nombreNegocio,
        nombre: req.body.nombre,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        tipoId: req.body.tipoId,
        identificacion: req.body.identificacion,
        nacimiento: req.body.nacimiento,
        edad: req.body.edad,
        correo: req.body.correo,
        telefono: req.body.telefono,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        otrasSenas: req.body.otrasSenas,
        horario: req.body.horario,
        enlaceFacebook : req.body.enlaceFacebook,
        enlaceInstagram : req.body.enlaceInstagram,
        enlaceTiktok : req.body.enlaceTiktok,
        tipo: 'Proveedor',
        estado: 'pendiente'
    });

    nuevoUsuarioProveedor.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            mailTemplate.registro_proveedor(req.body.nombre, req.body.correo);
            mailTemplate.registro_proveedor_admin(req.body.nombre, req.body.correo);
            res.json({
                msj: 'El usuario se registró adecuadamente'
            });
        }
    });
});

router.get('/listar-proveedores-pendientes', (req, res) => {
    Usuario.find((error, usuarios) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los usuarios',
                error
            });
        } else {
            res.json({
                usuarios
            });
        }
    });
});

router.put('/aceptar-proveedores-pendientes', (req, res) => {
    Usuario.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo aprobar el proveedor',
                err
            });
        } else {
            res.json({
                msj: 'Se aprobó el proveedor correctamente'
            });
        }
    });
});

router.put('/rechazar-proveedores-pendientes', (req, res) => {
    Usuario.updateOne({ correo: req.body.correo }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo rechazar el proveedor',
                err
            });
        } else {
            res.json({
                msj: 'Se rechazó el proveedor correctamente'
            });
        }
    });
});


module.exports = router;

// Solo se ha modificado el registrar-usuario-proveedor, lo de abajo esta pendiente...


// router.get('/buscar-usuario-id', (req, res) => {
//     Usuario.findOne({ _id: req.query._id }, (error, usuario) => {
//         if (error) {
//             res.json({
//                 msj: 'Ocurrió un error al listar el usuario',
//                 error
//             });
//         } else {
//             res.json({
//                 usuario
//             });
//         }
//     });
// });

// router.get('/buscar-usuario-correo', (req, res) => {
//     Usuario.findOne({ correo: req.query.correo }, (error, usuario) => {
//         if (error) {
//             res.json({
//                 msj: 'Ocurrió un error al listar el usuario',
//                 error
//             });
//         } else {
//             res.json({
//                 usuario
//             });
//         }
//     });
// });

// router.delete('/eliminar-usuario', (req, res) => {
//     Usuario.deleteOne({ correo: req.body.correo }, (error) => {
//         if (error) {
//             res.json({
//                 msj: 'Ocurrió un error al eliminar el usuario',
//                 error
//             });
//         } else {
//             res.json({
//                 msj: 'Usuario eliminado correctamente'
//             });
//         }

//     });
// });

// router.put('/modificar-usuario', (req, res) => {
//     Usuario.updateOne({ correo: req.body.correo }, {
//         $set: req.body
//     }, (error) => {
//         if (error) {
//             res.json({
//                 msj: 'El usuario no se pudo modificar',
//                 error
//             });
//         } else {
//             res.json({
//                 msj: 'El usuario se  modificó correctamente'
//             });
//         }
//     });

// });

// router.post('/validar-credenciales', (req, res) => {
//     // Estados
//     // Pendiente de autorización (proveedor)
//     // Activo
//     // Inactivo
//     // Bloqueado
//     // Pendiente de cambio de contraseña (cliente)

//     Usuario.findOne({ correo: req.body.correo }, (error, usuario) => {
//         if (error) {
//             res.json({
//                 msj: 'Ocurrió un error al buscar el usuario',
//                 error
//             });
//         } else {
//             if (usuario) {
//                 if ((usuario.contrasenna == req.body.contrasenna)) {
//                     res.json({
//                         msj: 'Credenciales válidas',
//                         estado: 'Encontrado',
//                         usuario: {
//                             correo: usuario.correo,
//                             nombre: usuario.nombre,
//                             nacimiento: usuario.nacimiento,
//                             sexo: usuario.sexo,
//                             tipo: usuario.tipo,
//                             estado: usuario.estado
//                         }
//                     });
//                 } else {
//                     res.json({
//                         msj: 'Correo o contraseña incorrectos',
//                         estado: 'No encontrado'
//                     });
//                 }
//             } else {
//                 res.json({
//                     msj: 'Correo o contraseña incorrectos',
//                     estado: 'No encontrado'
//                 });
//             }

//         }

//     });

// });
