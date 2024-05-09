const express = require("express")
const ReportController=require('../controllers/Reporte');
const md_auth=require("../middlewares/Autentication");

const api = express.Router()

api.post("/reportaruser/:id",[md_auth.asureAuth], ReportController.reportarUser)
api.get("/verreporte",[md_auth.asureAuth], ReportController.getReportes)
api.get("/verreporte/:id",[md_auth.asureAuth], ReportController.verReporte)
api.post("/reportarart/:id",[md_auth.asureAuth], ReportController.reportarArt)
api.get("/verreporteart",[md_auth.asureAuth], ReportController.getReportesArticulo)
api.get("/verreporteart/:id",[md_auth.asureAuth], ReportController.verReporteArt)
api.patch("/updatereporte/:id",[md_auth.asureAuth], ReportController.actualizarReporteUser)
api.patch("/updatereporteart/:id",[md_auth.asureAuth], ReportController.actualizarReporteArt)


module.exports = api