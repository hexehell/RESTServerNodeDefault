
class Saludar_controller{

    static fnSaludarGet= (req, res)=> {
            
           const {msg} =  req.body; //desde el body    // se requiere el middleware express.json para parsear el body

           const {nom} = req.query;// desde el query


           let nombre; 
           let id;


           // obtener informacion desde el segmento, 
           // debe ser declarado en el objeto Router o directamente en el metodo get
           // del objeto servidor express
           // de la sigueinte manera
           // http://ruta/:var1/:var2/:varn

           if(Object.keys( req.params).length===1){

             ({id} = req.params); // desde el segmento 1 parametro

           }
           else if(Object.keys( req.params).length>=1){

           ({id,nombre} = req.params) // desde el segmento multiples parametros


           }

            console.log(req.params)

        //    console.log( msg)

        res.json({
            "body":msg,// ruta/saludar?nombre=<nombre>
             "query":nom,
             "segmento":{
                 id,
                 nombre,
             }
        })
    
      
    }

    static fnSaludarPost =(req, res)=> {


        res.json({
            "hola":req.query.nombre
        })
    
    
    }

    static fnSaludarPut= (req, res)=> {


        res.json({
            "msg":`se agrego: ${req.query.nombre} a la BD`,
            "status":'ok' 
        })
    
    
    }

    static fnSaludarDelete= (req, res)=> {



        res.json({
            "msg":`se elimino: ${req.query.nombre} de la BD`,
            "status":'ok' 
        })
    
    
    }

}

module.exports = Saludar_controller;

