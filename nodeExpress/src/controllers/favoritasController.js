const connection = require("../config/connection");

function listar(req, res){
    if(connection){
        let sql ="select favoritas.idfavoritas,favoritas.id_canciones,canciones.titulo,canciones.artista,canciones.fecha from canciones inner join favoritas on canciones.idcanciones = favoritas.id_canciones";

        connection.query(sql, (err, favoritas) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.json(favoritas);
            }
        })
    }
}

function crear(req, res){
    if(connection){
        const favoritas = req.body;
        //const id = this.req.body.idfavoritas
        //let sql ="INSERT INTO favoritas set id_canciones = 1"
        let sql ="INSERT INTO favoritas set ?"
        //let sql = "INSERT INTO favoritas (id_canciones) values ('id')";
        connection.query(sql, [favoritas], (err, rows) =>{
            if(err) {
                res.status(400).json(err);
            }else {
                res.json({data: rows, mensaje: "agregada a favoritos con exito"});
            }
        })
        
    }
}
function eliminar(req, res){
    if(connection){
        const{id} = req.params;
        let sql = "DELETE FROM favoritas WHERE idfavoritas = ? ";
        connection.query(sql, [id], (err,rows) =>{
            if(err){
                res.status(400).json(err);
            }else {
                let mensaje = "";

                if(rows.affectedRows === 0) mensaje = "no encontrada";
                else mensaje = "eliminado de favoritas con exito";
                res.json({error: false, data: rows, mensaje});
            }
        })
    }
}


module.exports = {
    listar,
    crear,
    eliminar
}
