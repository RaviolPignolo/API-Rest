// importacion  de la base de datos de tareas desde models
const tareas = require('../models/modeloTareas');


exports.listarTareas = (req, res) => {
// tarea que  enlista  las tareas

};


exports.obtenerTareaId = (req, res) =>{
    // busca una tarea  por su id (mediante parametros de url)
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);
    if (tarea){
        res.status(200).json(tarea);
    } else {
        res.status(404).json({error: 'Tarea no encontrada'})
    }
};

exports.crearTarea = (req, res) => {
    // se crea la tarea  q se quiere agregar a la lista
};
