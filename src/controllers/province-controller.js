import {Router} from "express";
import * as ProvinceService from "../services/province-service.js";
import { StatusCodes } from "http-status-codes";   
import { asyncHandler } from "../helpers/async-handler.js";

const ProvinceRouter = Router();

ProvinceRouter.get("/", asyncHandler(async (req, res) => {
const provinces = await ProvinceService.getAll()
res.status(StatusCodes.OK).json(provinces)
}))

ProvinceRouter.get("/:id", asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await ProvinceService.getById(id);
    if (result.notFound) {
        return res
            .status(StatusCodes.NOT_FOUND)
            .json({ error: "Provincia no encontrada" });
    }
    res
        .status(StatusCodes.OK)
        .json(result.data);
}));


/*
{
  "nombre": "Jesi",
  "capital": "Crack",
  "latitud": "-34.9214",
  "longitud": "-57.9544"
}
*/
ProvinceRouter.post("/", asyncHandler(async (req, res) => {
    const { error, data } = await ProvinceService.create(req.body)
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ error })
    res.status(StatusCodes.CREATED).json("Provincia creada correctamente")
}))


/* NO SE PUEDE CAMBIAR EL NOMBRE DE UNA CIUDAD
{
  "nombre": "Buenos Aires",
  "capital": "Nueva Capital",
  "latitud": "-34.5000",
  "longitud": "-58.0000"
} 
*/
ProvinceRouter.put("/", asyncHandler(async (req, res) => {
    const { error, notFound} = await ProvinceService.update(req.body)
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ error })
    if (notFound) return res.status(StatusCodes.NOT_FOUND).json({ error: "Provincia no encontrada" })
    res.status(StatusCodes.CREATED).json("Provincia modificada correctamente")
}))


//MANDAR SOLO NOMBRE PARA ELIMINAR: SE ELIMINARA SOLO EL PRIMER REGISTRO QUE SE ENCUENTRE DE ESE NOMRBE
ProvinceRouter.delete("/", asyncHandler(async (req, res) => {
    const { notFound } = await ProvinceService.remove(req.body)
    console.log(req.body)
    if (notFound) return res.status(StatusCodes.NOT_FOUND).json({ error: "Provincia no encontrada" })
    res.status(StatusCodes.OK).json({ message: "Provincia eliminada" })
}))

export default ProvinceRouter;