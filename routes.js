const express = require('express')
const routes = express.Router()

var data = { 	
    nombre : "Alxedo",
    description : "IoT device",
    great : true,
    price : "1300",
    purifiers : [ "one", "two", "three"]
    }  

    var body ={
        nombre : true,
        purifiers : false 
    }

  
 
    //------------- GET -------------
    routes.get('/alxedoGet', function (req, res) {            
            if(body.nombre == true && body.purifiers == true) {
                req = {
                 nombre : data.nombre,
                 description : data.description,
                 great : data.great,
                 price : data.price,
                 purifiers : data.purifiers,
                 statusCode: 200
                };
            }else if(body.nombre != true  && body.purifiers == true) {
                req = {
                    description : data.description,
                    great : data.great,
                    price : data.price,
                    purifiers : data.purifiers,
                    statusCode: 200
                };
            }else if(body.nombre == true  && body.purifiers != true) {
                req = {
                 nombre : data.nombre,
                 description : data.description,
                 great : data.great,
                 price : data.price,
                 statusCode: 200
                };
            }
            else if(body.nombre != true  && body.purifiers != true ) {
                req = {
                 error: true,
                 statusCode: 406,
                 mensaje: "Ingresa al menos un campo requerido"
                };
            }
            res.send(req);
            });


            //----------- POST -------------
              routes.post('/alxedoPost', (req, res) => {
                console.log(req.body)
              
                if(!req.body.nombre && !req.body.price) {
                 respuesta = {
                  error: true,
                  statusCode: 400,
                  mensaje: 'El campo nombre y price son requeridos'
                 };
                } else if(req.body.nombre  && !req.body.price ) {
                     respuesta = {
                     error: true,
                     statusCode: 400,
                     mensaje: "Favor de verificar el campo price"
                    };
                }
                else if(!req.body.nombre  && req.body.price ) {
                    respuesta = {
                    error: true,
                    codigo: 400,
                    mensaje: 'Favor de verificar el campo nombre'
                   };
                }else{
                    respuesta = {
                        statusCode: 200,
                        mensaje: 'Registrado Exitosamente'
                       };
                }                   
                   res.send(respuesta);
               });
    

module.exports = routes