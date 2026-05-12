// importaciones:libreria express para usar sus funciones de servidor y
// el controlador donde esta la logica (de las tareas)
const express = require('express');
const tareasController = require('../controllers/contollersTareas');    

const router = express.Router();// objeto router para gestionar rutas 


/* endpoints para el recurso tareas:
    listado de tareas (get), busqueda por id (get) 
   y crear nueva tarea (post)
*/
router.get('/tareas', tareasController.listarTareas);
router.get('/tareas/:id', tareasController.obtenerTareaId);
router.post('/tareas', tareasController.crearTarea);    


// exportacion de rutas para que  app.js las pueda usar
module.exports = router;