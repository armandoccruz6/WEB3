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

module.exports = {
    listar
}