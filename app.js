const express = require('express');

const path = require('path');

const app = express();

const publicpath = path.join(__dirname, './public');

app.use(express.static(publicpath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

//ruta del archivo home.html
app.get('/home', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

//ruta del archivo index.html
app.get('/index',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

//ruta del archivo viewport.html
app.get('/flex', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/flexbox.html'));
});


app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});