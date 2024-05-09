const mongoose=require("mongoose");
const { Schema } = mongoose;

const categoria=mongoose.Schema(
    {
        titulo:String,
        articulo:[{type: Schema.Types.ObjectId, ref:"Articulo"}]
    }
);

module.exports= mongoose.model("Categoria", categoria)