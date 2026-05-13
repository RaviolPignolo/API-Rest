// importacion  de la base de datos de tareas desde models
const tareas = require('../models/modeloTareas');


exports.listarTareas = (req, res) => {
// tarea que  enlista  las tareas

};


// busca una tarea  por su id (mediante parametros de url)
exports.obtenerTareaId = (req, res) =>{
    // busca en tareas el objeto donde el id coincide con el de la url
    // parseInt convierte el texto de la URL a numerp y req.params.id obtiene el valor
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    // sino arroja resultado, lanza menasaje de error y devuelve el estado 404 de error
    if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }   
    // i la encuentra la devuelve en formato json
    res.json(tarea);    
}


exports.crearTarea = (req, res) => {
    // se crea la tarea  q se quiere agregar a la lista
};
