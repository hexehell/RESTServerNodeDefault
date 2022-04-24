const express = require('express')
const hbs = require('hbs')
const config = require('dotenv').config();
const app = express()

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('www'))


app.get('/', function (req, res) {
//   res.send('Hello World')


    res.render('home',{
        
        titulo:'Curso Node',
        tituloIzq: 'WebServerApp',
        subTituloIzq: 'Express'
    })

})

app.get('/generic', function (req, res) {
    // res.send('pancholino jackelino')

    // res.sendFile(__dirname + '/www/generic.html')
    res.render('generic',{
        
        titulo:'Curso Node',
        tituloIzq: 'WebServerApp',
        subTituloIzq: 'Express'
    })

  })

app.get('/elements', function (req, res) {
    // res.send('pancholino jackelino')

    // res.sendFile(__dirname + '/www/elements.html')

    res.render('elements',{
        
        titulo:'Curso Node',
        tituloIzq: 'WebServerApp',
        subTituloIzq: 'Express'
    })

  })
  
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/www/404.html')
  })

app.listen(process.env.PORT)