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
    if(!canciones.fecha){
        return res.status(400).json({error: true, mensaje:"El año es obligatorio"});
    }
    if(!canciones.fecha && canciones.fecha.length !==4){
        return res.status(400).json({error: true, mensaje:"La longitud maxima de año debe ser de 4 caracteres"});
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
function editar(req, res){
    if(connection){
        const {id} = req.params;
        const cancion = req.body;

        if(!cancion.titulo){
            return res.status(400).json({error: true, mensaje:"El titulo es obligatorio"});
        }
        if(!cancion.artista){
            return res.status(400).json({error: true, mensaje:"El artista es obligatorio"});
        }
        //......................


        //....................
        
        //let sql = `UPDATE canciones set titulo = ${connection.escape(cancion.titulo)}, artista = ${connection.escape(cancion.artista)}, fecha = ${connection.escape(cancion.fecha)} WHERE id = ${connection.escape(id)}`;
        let sql = "UPDATE canciones set ? WHERE idcanciones = ?";
        connection.query(sql, [cancion, id], (err, rows) => {
            if(err){
                res.status(400).json(err);
            }else{
                let mensaje = "";
                if(rows.changedRows === 0) mensaje = "la info es la misma";
                else mensaje = "cancion modificada con exito"
                res.json({error: false, data: rows, mensaje});
            }
        })
    }
}
function eliminar(req, res){
    if(connection){
        const{id} = req.params;
        let sql = "DELETE FROM canciones WHERE idcanciones = ? ";
        connection.query(sql, [id], (err,rows) =>{
            if(err){
                res.status(400).json(err);
            }else {
                let mensaje = "";

                if(rows.affectedRows === 0) mensaje = "cancion no encontrada";
                else mensaje = "cancion eliminada con exito";
                res.json({error: false, data: rows, mensaje});
            }
        })
    }
}

module.exports = {
    listar,
obtenerCanciones,
 crear,
 editar,eliminar
}