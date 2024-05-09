const mongoose=require("mongoose");
const { Schema } = mongoose;

const userSchema=mongoose.Schema({
    nomusuario:String,
    apellidos:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:String,
    active:Boolean,
    avatar:String,
    descripcion:String,
    articulo:[{type: Schema.Types.ObjectId, ref:"Articulo"}],
    seguidores:Number,
    seguidos:Number
});

module.exports=mongoose.model("User",userSchema);