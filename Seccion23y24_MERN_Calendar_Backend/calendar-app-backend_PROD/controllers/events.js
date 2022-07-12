const { response, request } = require('express');
const Event = require('../models/Evento');

const getEventos = async (req, res = response) => {
    
    const events = await Event.find().populate('user', 'name');// user es el campo q viene en el json y el segundo argumento indica q se traiga ademas el campo name, (el campo _id siempre viene), lo cual corresponde a valores del userSchema

    res.status(200).json({
        ok: true,
        events
    })
}

const crearEvento = async (req = request, res = response) => {
    
    const event = new Event( req.body );

    try {

        event.user = req.uid;// req.uid se establecio en el validarJWT
        const eventSave = await event.save();

        res.json({
            ok: true,
            evento: eventSave
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error interno'
        });
    }
}

const actualizarEvento = async( req, res = response ) => {
    
    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventActualizado = await Event.findByIdAndUpdate( eventId, nuevoEvento, { new: true } ); //{ new: true } es para devolver la data con las modificacioens realizadas sin el, se retorna el estado anterior de la data

        res.json({
            ok: true,
            evento: eventActualizado
        });        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error interno'
        });
    }
}

const eliminarEvento = async (req, res = response) => {
    
    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }

        await Event.findByIdAndDelete( eventId );

        res.json({
            ok: true
        });        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error interno'
        });
    }
}

module.exports = {
    getEventos, 
    crearEvento, 
    actualizarEvento, 
    eliminarEvento 
}