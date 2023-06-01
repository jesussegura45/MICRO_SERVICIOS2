const {Schema, model } = require('mogoosse')

const Etapaschema = Schema({
    nombreEtapa: {
        type: String,
        required: [true, 'Nombre requerido']
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Etapas', Etapaschema);
