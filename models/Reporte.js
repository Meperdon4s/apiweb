const mongoose = require("mongoose")
const { Schema } = mongoose;

const reportSchema = mongoose.Schema({

    usuario:{type: Schema.Types.ObjectId, ref:"User"},
    fecha: Date,
    motivo:String,
    atendido:Boolean
})

module.exports= mongoose.model("Reporte", reportSchema)