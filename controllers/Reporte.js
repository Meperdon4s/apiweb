const Reporte = require("../models/Reporte")
const ReporteArt = require("../models/ReporteArt")
const Articulo = require("../models/Articulo")

async function reportarUser(req,res){

    const {id}= req.params
    const {motivo} = req.body

    const usuario = id

    
    const reporteuser = new Reporte({
        usuario,
        fecha: new Date,
        motivo,
        atendido:false


    })

    const guardarreporte= await reporteuser.save()

    try {
        res.status(200).send(guardarreporte)
        
    } catch (error) {
        res.status(500).send({
            msg:"Error al enviar reporte"
        })
    }

}

async function getReportes(req,res){

    let response = null


    

    try {
            response = await Reporte.find({atendido:false}).populate("usuario",{
                nombreusuario:1,
                apellidos:1
            })
        res.status(200).send(response)
        
        
    } catch (error) {
        res.status(500).send({
            msg:"Error al obtener reportes"
        })
    }
}

async function verReporte(req, res){
 
    const userReport = await Reporte.findById(id).populate("usuario",{
        nombreusuario:1,
        apellidos:1
    })

    try {
        res.status(200).send(userReport)

    } catch (error) {
        res.status(500).send({
            msg:"No se pudo obtener el reporte"
        })
        
    }

}

async function reportarArt(req,res){

    const {id}= req.params
    const {motivo} = req.body

    const articulo = id



    
    const reporteart = new ReporteArt({
        articulo,
        fecha: new Date,
        motivo,
        atendido:false


    })

    const guardarreporte= await reporteart.save()

    try {
        res.status(200).send(guardarreporte)
        
    } catch (error) {
        res.status(500).send({
            msg:"Error al enviar reporte"
        })
    }

}

async function getReportesArticulo(req,res){

    const {atendido} = req.query
    let response = null

    try {
        
            response=await ReporteArt.find({atendido:false}).populate("articulo",{
                titulo:1,
                autor:1,
                descripcion:1
            })
        res.status(200).send(response)
        
        
    } catch (error) {
        res.status(500).send({
            msg:"Error al obtener reportes"
        })
    }
}

async function verReporteArt(req, res){

    const {id}= req.params
    const userReport = await ReporteArt.findById(id).populate("articulo",{
        titulo:1,
        autor:1,
        descripcion:1
    })

    try {
        res.status(200).send(userReport)

    } catch (error) {
        res.status(500).send({
            msg:"No se pudo obtener el reporte"
        })
        
    }

}

async function actualizarReporteUser(req, res){

    const {id}= req.params
    const repor = {
        atendido:true
    }


    try {
        const update = await Reporte.findByIdAndUpdate({_id:id},repor)
        res.status(200).send(update)
    } catch (error) {
        res.status(500).send({
            msg:"Error al actualizar"
        })
        
    }




}

async function actualizarReporteArt(req, res){

    const {id}= req.params
    const repor = {
        atendido:true
    }


    try {
        const update = await ReporteArt.findByIdAndUpdate({_id:id},repor)
        res.status(200).send(update)
    } catch (error) {
        res.status(500).send({
            msg:"Error al actualizar"
        })
        
    }




}




module.exports={
    reportarUser,
    getReportes,
    verReporte,
    reportarArt,
    getReportesArticulo,
    verReporteArt,
    actualizarReporteUser,
    actualizarReporteArt
}