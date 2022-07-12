const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true
        });

        console.log('DB Online');
    } catch(error) {
        console.log(error);
        throw new Error('Ocurrio un error al intentar conectarse a la Base de Datos de Mongo');
    }
}

module.exports = {
    dbConnection
}


