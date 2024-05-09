const mongoose = require("mongoose")
const {Schema} = mongoose;

const reportArtSchema = mongoose.Schema({

    articulo:{type: Schema.Types.ObjectId, ref:"Articulo"},
    fecha:Date,
    motivo:String,
    atendido:Boolean
})

module.exports = mongoose.model("ReporteArt", reportArtSchema)