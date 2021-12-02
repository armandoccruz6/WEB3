const connection = require("../config/connection");

function listar(req, res){
    //res.json({message: "mis canciones"})
    if(connection){
        let sql = "SELECT * FROM canciones";

        connection.query(sql, (err, canciones) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.json(canciones);
            }
        })
    }
}
function obtenerCanciones(req, res){
if(connection){
    const {id} = req.params;
    let sql = `SELECT * FROM canciones where idcanciones = ${connection.escape(id)}`;
    connection.query(sql, (err, canciones) =>{
        if(err){
            res.status(400).json(err);
        }else{
            let mensaje=""
            if(canciones === undefined || canciones.length === 0)
            mensaje="Cancion no encontrada";
            res.json({data: canciones[0], mensaje});
        }
    });
}
}
function crear(req, res){
if(connection){
    const canciones = req.body;
    if(!canciones.titulo){
        return res.status(400).json({error: true, mensaje:"El titulo es obligatorio"});
    }
    if(!canciones.artista){
        return res.status(400).json({error: true, mensaje:"El artista es obligatorio"});
    }
    if(!canciones.titulo && canciones.titulo.length !==50){
        return res.status(400).json({error: true, mensaje:"La longitud maxima es de 50 caracteres"});
    }
    if(!canciones.artista && canciones.artista.length !==80){
        return res.status(400).json({error: true, mensaje:"La longitud maxima es de 80 caracteres"});
    }
    let sql="INSERT INTO canciones set ?";
    connection.query(sql, [canciones], (err, rows) =>{
        if(err){
            res.status(400).json(err);
        }else{
           res.json({error: false, data: rows, mensaje: "Cancion creada con exito."});
        }
});
}
}
module.exports = {
    listar,
obtenerCanciones,
 crear
}