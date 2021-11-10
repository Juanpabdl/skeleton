var {model,Schema} = require("mongoose")

var TaskSchema = Schema ({
    title: String,
    description: String,
    status:{
        type: Boolean,
        default: false
    }
})

module.exports = model('tasks', TaskSchema)
//Nombre del modelo, esquema con el que se compara