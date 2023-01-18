const express = require('express')
const hbs = require('hbs');
const dotenv = require('dotenv');

//dotenv.config({path:'./env.env'});
dotenv.config();

const app = express()

// handlerbar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT;

// Seervir contenido estatico
app.use( express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Maite Garcia',
    titulo: 'Prueba de Titulo'
  });
})


app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Maite Garcia',
    titulo: 'Prueba de Titulo'
  });
})

app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Maite Garcia',
    titulo: 'Prueba de Titulo'
  });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})