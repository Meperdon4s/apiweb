const mongoose=require("mongoose")
const { Schema } = mongoose;

const articulo=mongoose.Schema(
    {
        titulo:String,
        autor:{type: Schema.Types.ObjectId, ref:"User"},
        categoria:String,
        descripcion:String,
        calificacion:{type:Number, default:0},
        fecha:Date, 
        comentario:[{type: Schema.Types.ObjectId, ref:"Comentario"}]
    }
);

module.exports= mongoose.model("Articulo", articulo)