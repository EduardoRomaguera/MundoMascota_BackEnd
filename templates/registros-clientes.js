'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

// Registro de usuarios Proveedor, primer correo enviado al proveedor
this.registro_proveedor = (pnombre, pcorreo) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'sochisoftware2021@gmail.com',
        to: pcorreo,
        subject: `Bienvenido ${pnombre} a Mundo Mascota`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                    <p  style="color: #fff; text-align:center">
                    <span style="color: #8EE5D8">${pnombre}</span> 
                    a Mundo Mascota
                    </p>
                    <p  style="color: #fff; text-align:center">
                        Como parte del proceso de registro un agente de Mundo Mascota revisará su aplicación. Tan pronto se complete la revisión le informaremos por este medio.
                    </p>
                </td>
                </tr>
                <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Cuidar a la mascota nunca fue tan facil!</p>
                </td>
            </tr>
            </table>
        
        `
    };

    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

// Registro de usuarios Proveedor, correo al administrador
this.registro_proveedor_admin = (pnombre, pcorreo) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'sochisoftware2021@gmail.com',
        to: 'sochisoftware2021@gmail.com',
        subject: `El proveedor ${pnombre} desea ingresar a Mundo Mascota`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Nuevo proveedor</h1>
                    <p  style="color: #fff; text-align:center">
                    <span style="color: #8EE5D8">${pnombre}</span> 
                    desea ingresar a Mundo Mascota como proveedor
                    </p>
                    <p  style="color: #fff; text-align:center">
                        Por favor ingrese a la plataforma para revisar la solicitud y aprobar o denegar el ingreso a
                        <a href="http://127.0.0.1:5500/P05-inicio-sesion.html" style="color: #8EE5D8"> Mundo Mascota </a>
                    </p>
                </td>
                </tr>
                <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Cuidar a la mascota nunca fue tan fácil!</p>
                </td>
            </tr>
            </table>
        
        `
    };

    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

// Registro de usuarios Proveedor, correo al proveedor aprobado
this.aprobar_proveedor = (pcorreo, pnombreNegocio, link) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'sochisoftware2021@gmail.com',
        to: pcorreo,
        subject: `Bienvenido a Mundo Mascota`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido a Mundo Mascota</h1>
                    <p  style="color: #fff; text-align:center">
                    <span style="color: #8EE5D8">${pnombreNegocio}</span> 
                    ha sido aprobado como proveedor.
                    </p>
                    <p  style="color: #fff; text-align:center">
                        Por favor ingrese a la plataforma para registrar su contraseña y completar el proceso de registro dando clic al siguiente enlace
                        <a href=${link} style="color: #8EE5D8"> Mundo Mascota </a>
                    </p>
                </td>
                </tr>
                <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Cuidar a la mascota nunca fue tan fácil!</p>
                </td>
            </tr>
            </table>
        
        `
    };

    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

// Registro de usuarios Proveedor, correo al proveedor rechazado
this.rechazar_proveedor = (pcorreo, pnombreNegocio) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'sochisoftware2021@gmail.com',
        to: pcorreo,
        subject: `Lo sentimos, de Mundo Mascota`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Lo sentimos, de Mundo Mascota</h1>
                    <p  style="color: #fff; text-align:center">
                    <span style="color: #8EE5D8">${pnombreNegocio}</span> 
                    NO ha sido aprobado como proveedor.
                    </p>
                    <p  style="color: #fff; text-align:center">
                        Nuestro agente ha rechazado la solicitud de registro. Para más información puede ponerse en contacto escribiendo al siguiente correo electrónico:
                        <a href="mailto:hola@mundomascota.com" style="color: #8EE5D8">hola@mundomascota.com</a>
                    </p>
                </td>
                </tr>
                <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Cuidar a la mascota nunca fue tan fácil!</p>
                </td>
            </tr>
            </table>
        
        `
    };

    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};




// Registro de usuarios Clientes, correo de Bienvenida con contraseña random
this.registro_cliente = (pnombre, pcorreo, ppassword) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'sochisoftware2021@gmail.com',
        to: pcorreo,
        subject: `Bienvenido ${pnombre} a Mundo Mascota`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                    <p  style="color: #fff; text-align:center">
                    <span style="color: #8EE5D8">${pnombre}</span>
                    a Mundo Mascota
                    </p>
                    <p  style="color: #fff; text-align:center">
                        El siguiente paso es que ingrese a la plataforma con la siguiente contraseña temporal:
                        <span style="color: #8EE5D8">${ppassword}</span>
                        <a href="http://127.0.0.1:5500/P05-inicio-sesion.html "style="color: #8EE5D8"> Mundo Mascota</a>
                    </p>
                </td>
                </tr>
                <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Cuidar a la mascota nunca fue tan fácil!</p>
                </td>
            </tr>
            </table>
        
        `
    };

    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

module.exports = this;