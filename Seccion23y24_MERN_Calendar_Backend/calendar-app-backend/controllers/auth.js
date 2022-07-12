const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo electronico'
            })
        }

        user = new User(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        //Generar JWT
        const token = await generarJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error interno'
        })
    }
}

const loginUser = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales incorrectas'
            })
        }
        
        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, user.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales incorrectas'
            });
        }

        //Generar JWT
        const token = await generarJWT(user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error interno'
        })
    }
}

const revalidateToken = async (req, res = response) => {
    
    const uid = req.uid;
    const name = req.name;

    const token = await generarJWT(uid, name);
    
    res.status(200).json({
        ok: true,
        uid,
        name,
        token
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}