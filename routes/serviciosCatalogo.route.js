'use strict';
const express = require('express');
const ServicioCatalogo = require('../models/serviciosCatalogo.model');
const router = express.Router();



router.post('/registrar-servicioCatalogo', (req, res) => {
    let nuevoServicioCatalogo = new ServicioCatalogo({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });
    nuevoServicioCatalogo.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el servicio',
                error
            });
        } else {
            res.json({
                msj: 'El servicio se registró correctamente '
            });
        }
    });
});


router.get('/listar-serviciosCatalogo', (req, res) => {
    ServicioCatalogo.find((error, serviciosCatalogo) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al listar los servicios',
                error
            });
        } else {
            res.json({
                serviciosCatalogo
            });
        }
    });
});

router.put('/modificar-servicioCatalogo', (req, res) => {
    ServicioCatalogo.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el servicio',
                err

            });
        } else {
            res.json({
                msj: 'El servicio se guardó correctamente'
            });
        }
    });

});

router.delete('/eliminar-servicioCatalogo', (req, res) => {
    ServicioCatalogo.deleteOne({ _id: req.body._id }, (error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al eliminar el servicio',
                error
            });
        } else {
            res.json({
                msj: 'El servicio ha sido eliminado'
            });
        }
    });
});

module.exports = router;