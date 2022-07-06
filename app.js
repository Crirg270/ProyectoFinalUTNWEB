require('dotenv').config();
const express = require('express');
const app = express();
const port = 8085;
const hbs = require('hbs');



//HANDELBARS

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

/*  -------------middleware ---*/
app.use("/assets", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use(require('./router/mail'));

app.use(express.urlencoded({ extended: false }));
app.use(require('./router/router'));

app.get("/", (req, res) => {
    res.render('index');
})



app.get("/reparacion", (req, res) => {
    res.render('reparacion');
})


app.get("/comprar", (req, res) => {

    res.render('comprar');

})


app.get("/contacto", (req, res) => {
    res.render('contacto');
})

app.get("/clientes", (req, res) => {
    res.render('clientes');
})


app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);

})




