const connection = require("../config/connection");

function listar(req, res){
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

module.exports = {
    listar
}