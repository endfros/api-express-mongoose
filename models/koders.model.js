import mongoose from "mongoose"

const kodersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLegth: 3,
        maxLegth: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLegth: 3,
        maxLegth: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        minLegth: 1,
        maxLegth: 100
    },
    gender:{
        type: String,
        required: true,
        enum: ['h', 'm']
    },
    isGraduated: {
        type: Boolean,
        default: false
    }
})

//Create model

// Nombre de la coleccion a la que hacemos referencia y el schema
const Koder = mongoose.model('koders',kodersSchema)

export {Koder}