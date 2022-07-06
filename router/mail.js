const { Router } = require("express");
const nodemailer = require("nodemailer");
const mail = new Router();



mail.get("/mail", (req, res) => {

    res.render("mail");
})

mail.post("/enviar-email", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dirreccion = req.body.direccion;
    const localidad = req.body.localidad;
    const email = req.body.email;
    const problema = req.body.problema;
    const tipo= req.body.tipo;


    let transporter = nodemailer.createTransport({


        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }


    });

  let mailOptions = {

        to: "cristianservicepc@gmail.com",
        from: "Remitente", 
        html: `<h1> Mensaje de: ${nombre} ${apellido} <br> 
   contacto: ${email} <br> Problema reportado: ${problema}<br> Tipo de equipo: ${tipo} </h1>`,
    };


    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
          res.status(500).send(error.message);
            }else{
             res.render("enviado");
              res.status(200).jsonp(reqbody);
            }
      });
     });
     







module.exports = mail;