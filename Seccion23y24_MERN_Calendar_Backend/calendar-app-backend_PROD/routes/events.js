/*
    Rutas de Eventos / Events
    host + /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Evita colocar el validarJWT en cada una de las siguientes peticiones, por tanto se aplica a todas de aqui en adelante
router.use(validarJWT);

router.get(
    '/', 
    //validarJWT,
    getEventos
)

router.post(
    '/', 
    //validarJWT,
    [// middlewares
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ), //isDate es un validador personalizado
        check('start', 'La fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
)

router.put(
    '/:id', 
    //validarJWT,
        [// middlewares
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ), //isDate es un validador personalizado
        check('start', 'La fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento
)

router.delete(
    '/:id', 
    //validarJWT,
    eliminarEvento
)

module.exports = router;