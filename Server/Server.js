const express = require('express')

const { dirname } = require('path');
const appDir = dirname(require.main.filename);

class Server{

    constructor(){

        this.app = express()

        this.fnMiddleware()

        this.fnRuteo()

    }

    fnMiddleware = ()=>{


        console.log(appDir)
        const hbs = require('hbs')

        this.app.set('view engine','hbs')
        hbs.registerPartials(appDir + '/views/partials')

        this.app.use(express.static(appDir +  '/www'))


    }

    fnRuteo = ()=>{

        

        

        this.app.get('/', function (req, res) {
            //   res.send(res)
            
            
                res.render('home',{
                 
                    titulo:'Curso Node',
                    tituloIzq: 'WebServerApp',
                    subTituloIzq: 'Express'
                })
            
            })
            
        this.app.get('/generic', function (req, res) {
                // res.send('pancholino jackelino')
            
                // res.sendFile(__dirname + '/www/generic.html')
                res.render('generic',{
                    
                    titulo:'Curso Node',
                    tituloIzq: 'WebServerApp',
                    subTituloIzq: 'Express'
                })
            
              })
            
        this.app.get('/elements', function (req, res) {
                // res.send('pancholino jackelino')
            
                // res.sendFile(__dirname + '/www/elements.html')
            
                res.render('elements',{
                    
                    titulo:'Curso Node',
                    tituloIzq: 'WebServerApp',
                    subTituloIzq: 'Express'
                })
            
              })
              

        this.app.get('*', function (req, res) {
            res.sendFile(appDir + '/www/404.html')
          })
        

    }

    fnEscuchar = ()=>{

        this.app.listen(process.env.PORT,()=>{

            console.log(`escucha por el puerto ${process.env.PORT}`)

        })

    }

    

}
module.exports = Server;