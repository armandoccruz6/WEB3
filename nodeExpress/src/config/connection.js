const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "kevin10",
    "database": "crud_node2"
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) =>{
    if(error){
        console.log("ha ocurrido un error: ", error);
    } else {
        console.log("base de datos conectada");
    }
});

module.exports = myConn;



