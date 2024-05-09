const express=require("express")
const ArticuloController= require('../controllers/Articulos')
const md_auth=require("../middlewares/Autentication");

const api = express.Router()

api.post("/saveArticulo",[md_auth.asureAuth], ArticuloController.postArticulos);
api.get("/buscarArticulo",[md_auth.asureAuth], ArticuloController.getArticulos);
api.get("/articulo/:id",[md_auth.asureAuth], ArticuloController.verArticulo)
api.patch("/subircalificacion/:id", [md_auth.asureAuth], ArticuloController.subirCalificacion)
api.patch("/editararticulo/:id", [md_auth.asureAuth], ArticuloController.updateArticulo)
api.delete("/borrararticulo/:id", [md_auth.asureAuth], ArticuloController.delArticulo)

module.exports=api