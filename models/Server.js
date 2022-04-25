const express = require('express')

const { dirname } = require('path');
const appDir = dirname(require.main.filename);

class Server{

    constructor(){

        this.app = express()

        this.fnMiddleware()

        this.fnCargarRutas();

        this.fnRuteo()

    }

    fnCargarRutas(){

        this.RutaSaludar= process.env.saludar;

    }

    fnMiddleware = ()=>{

        this.app.use(express.json());

        this.app.use(express.static('www'));


    }

    fnRuteo = ()=>{

        
        this.app.use(this.RutaSaludar,require('../routes/Saludar'))       
       
        this.app.get('*', function (req, res) {
            res.status(404).json({
                "msg":`NO NI MERGAS`,
                "status":'err' 
            })
          }) ;

       
        

    }

    fnEscuchar = ()=>{

        this.app.listen(process.env.PORT,()=>{

            console.log(`escucha por el puerto ${process.env.PORT}`)

        })

    }

    

}
module.exports = Server;