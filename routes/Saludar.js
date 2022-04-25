const Saludar_controller = require('../controllers/Saludar.controller')
const Rutear =  require('express').Router()

Rutear.get('/:id', Saludar_controller.fnSaludarGet)
Rutear.get('/:id/:nombre', Saludar_controller.fnSaludarGet)
Rutear.post('/', Saludar_controller.fnSaludarPost)
Rutear.put('/', Saludar_controller.fnSaludarPut)
Rutear.delete('/', Saludar_controller.fnSaludarDelete)

module.exports = Rutear;