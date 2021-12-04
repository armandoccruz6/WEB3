const connection = require("../config/connection");

function listar(req, res){//visualizar
    //res.json({message: "mis generos"})
    if(connection){
        let sql = "SELECT * FROM generos";

        connection.query(sql, (err, generos) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.json((generos));
            }
        })
    }
}
/*
function obtenerGeneros(req, res){
    if(connection){
        const {id} = req.params;
        let sql = `SELECT * FROM generos where idgenero = ${connection.escape(id)}`;
        connection.query(sql, (err, generos) =>{
            if(err){
                res.status(400).json(err);
            }else{
                let mensaje=""
                if(generos === undefined || generos.length === 0)
                mensaje="genero no encontrada";
                res.json({data: generos[0], mensaje});
            }
        });
    }
}
*/
function crear(req, res){//agregar
    if(connection){
        const generos =  req.body;

        if(!generos.genero){
            return res.status(400).json({error: true, mensaje: "el genero es obligatorio"});

        }
        if(generos.genero && generos.genero.length >=50){

            return res.status(400).json({error: true, mensaje: "solo se acepta un maximo de 50 caracteres"});



        }

        let sql = "INSERT INTO generos  set ?"
        connection.query(sql, [generos], (err, rows) => {
            if(err){
                res.status(400).json(err);

            }else{
                res.json({error:false, data: rows, mensaje: "Genero creado con exito"});
            }
        })

    }
}
function eliminar(req, res){
    if(connection){
        const{id} = req.params;
        let sql = "DELETE FROM generos WHERE idgenero = ? ";
        connection.query(sql, [id], (err,rows) =>{
            if(err){
                res.status(400).json(err);
            }else {
                let mensaje = "";

                if(rows.affectedRows === 0) mensaje = "genero no encontrada";
                else mensaje = "genero eliminado con exito";
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