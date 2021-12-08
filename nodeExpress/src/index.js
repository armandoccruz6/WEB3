const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false}))


require('./config/connection');

app.use(require('./routes/cancionesRoute'));
app.use(require('./routes/generoRoute'));
app.use(require('./routes/favoritasRoute'));

app.listen(app.get('port'), (error) =>{
    if(error){
        console.log("error:", error);
    } else{
        console.log("Servidor en puerto: ", app.get('port'));
    } 
});
