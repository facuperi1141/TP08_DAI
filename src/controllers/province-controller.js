import {Router} from "express";
import * as ProvinceService from "../services/province.service.js";
import { StatusCodes } from "http-status-codes";   

const ProvinceRouter = Router();

ProvinceRouter.get("/", asyncHandler(async (req, res) => {
const provinces = await ProvinceService.getAll()
res.status(StatusCodes.OK).json(provinces)
}))

ProvinceRouter.post("/", asyncHandler(async (req, res) => {
    const { error, result } = await ProvinceService.create(req.body)
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ error })
    res.status(StatusCodes.CREATED).json(result)
}))

ProvinceRouter.put("/", asyncHandler(async (req, res) => {
    const { error, notFound, result } = await ProvinceService.update(req.body)
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ error })
    if (notFound) return res.status(StatusCodes.NOT_FOUND).json({ error: "Provincia no encontrada" })
    res.status(StatusCodes.CREATED).json(result)
}))

ProvinceRouter.delete("/:id", asyncHandler(async (req, res) => {
    const { notFound } = await ProvinceService.remove(req.params.id)
    if (notFound) return res.status(StatusCodes.NOT_FOUND).json({ error: "Provincia no encontrada" })
    res.status(StatusCodes.OK).json({ message: "Provincia eliminada" })
}))