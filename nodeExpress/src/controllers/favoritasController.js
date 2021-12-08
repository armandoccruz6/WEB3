const connection = require("../config/connection");

function listar(req, res){
    if(connection){
        let sql ="SELECT * FROM favoritas";

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


module.exports = {
    listar,
    crear
}
