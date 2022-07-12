const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();

//console.log(process.env);//process.env es el rpefijo para acceder a variables de entorno definidias en el archivo .env

const app = express();

//* Conexion a Base de Datos
dbConnection();

//* Cors - queda con la configuracion basica
app.use(cors())

//* Directorio Publico
app.use(express.static('public'));

//* Lectura y parseo del body para poder enviar peticiones desde un postman por ejm
app.use( express.json() );

//* Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

//* Escuchar Peticiones
app.listen(process.env.PORT, () => {
  console.log(`Aplicación ejemplo, escuchando el puerto ${process.env.PORT}!`);
});