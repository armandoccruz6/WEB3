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


module.exports = {
    listar,    
    crear
}