const User=require("../models/users");
const Articulo=require("../models/Articulo")


  async function postArticulos(req, res, next){
    try {
      const { titulo, categoria, descripcion, calificacion } = req.body;
      const {usuario_id}= req.usuario;

      const autor= await User.findById(usuario_id)
      const usuario = await User.findById(usuario_id)

     


      const guardarArticulos = new Articulo({
        titulo,
        autor,
        categoria,
        descripcion,
        calificacion,
        fecha: new Date
        
      });

      const guardar = await guardarArticulos.save();
      usuario.articulo = usuario.articulo.concat(guardar.id)
      await usuario.save()
      

      res.status(200).json(guardar);
      
    } catch (error) {
      res.status(500).send({
        message: "Error al enviar",
      });
      next(error);
    }
  }

  async function getArticulos(req, res, next){
    try {
      
      const obtener= await Articulo.find().populate("autor",{
        nombreusuario:1,
        _id:0
      })
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  }

  async function verArticulo(req,res){

    try {
      const {id}= req.params
      const buscar = await Articulo.findById(id).populate("autor",{
        nombreusuario:1
      })
      res.status(200).send(buscar)



    } catch (error) {
      res.status(500).send({
        msg:"Error al buscar articulo"
        
      })
      
    }
  }

  async function subirCalificacion(req,res){

    const {id}= req.params
    const articulo = await Articulo.findById(id)

    articulo.calificacion = articulo.calificacion + 1
    
    await articulo.save()
    try {
      res.status(200).send(articulo)
    } catch (error) {
      res.status(500).send({
        msg :"Error"
      })
    }

  }

  async function updateArticulo(req, res){

    const {id}= req.params
    const artData = req.body

    try {
      const update=await Articulo.findByIdAndUpdate({_id:id},artData);
        res.status(200).send(update);
    } catch (error) {

      res.status(500).send({
        msg:"Error al actualizar"
      })
    }
  }

  async function delArticulo(req,res){
    const {id}=req.params;
    
    try {
        await Articulo.findByIdAndDelete(id);
        res.status(200).send({msg: "Articulo eliminado correctamente"})
    } catch (error) {
        res.status(400).send({
            msg:"Error al eliminar el articulo"
        })
    }
    }

module.exports={
  postArticulos,
  getArticulos,
  verArticulo,
  subirCalificacion,
  updateArticulo,
  delArticulo
}
  