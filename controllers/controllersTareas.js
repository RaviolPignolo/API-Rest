// importacion  de la base de datos de tareas desde models
const tareas = require('../models/modeloTareas');


exports.listarTareas = (req, res) => {
    try{
        if(tareas.length == 0){
            return res.status(200).json({
                mensaje: "No hay tareas registradas en el sistema",
                datos: []
            });
        }
        res.json(tareas);      
    } catch{
        res.status(500).json({
            mensaje: "Error al obtener las tareas",
            error: error.message
        });
    }
};


exports.obtenerTareaId = (req, res) =>{
    // busca una tarea  por su id (mediante parametros de url)

}

exports.crearTarea = (req, res) => {
    // se crea la tarea  q se quiere agregar a la lista
};
