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
        subject: `Bienvenido ${pnombre} al Gimnasio`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #e84393">${pnombre}</span> 
                        a la aplicación
                    </p>
                    <p  style="color: #fff; text-align:center">
                    Su correo es 
                        <span style="color: #e84393">${pcorreo}</span> 
                    </p>

                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
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





    //     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.MAILUSER,
//             pass: process.env.MAILPSSWD
//         }
//     });

//     let mail_options = {
//         from: 'sochisoftware2021@gmail.com',
//         to: pcorreo,
//         subject: `Bienvenido ${pnombre} a Mundo Mascota`,
//         html: `
//             <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
//             <tr height="200px">  
//                 <td bgcolor="" width="600px">
//                     <h1 style="color: #fff; text-align:center">Bienvenido</h1>
//                     <p  style="color: #fff; text-align:center">
//                         <span style="color: #e84393">${pnombre}</span> 
//                         a Mundo Mascota
//                     </p>
//                     <p  style="color: #fff; text-align:center">
//                     Como parte del proceso de registro un agente de Mundo Mascota revisará su aplicación. Tan pronto se complete la revisión le informaremos por este medio.
//                         <span style="color: #e84393">${pcorreo}</span> 
//                     </p>

//                 </td>
//             </tr>
//             <tr bgcolor="#fff">
//                 <td style="text-align:center">
//                     <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
//                 </td>
//             </tr>
//             </table>
        
//         `

//     };
//     transporter.sendMail(mail_options, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('El correo se envío correctamente ' + info.response);
//         }
//     });
// };

// module.exports = this;