import * as ProvinceRepository from "../repositories/province-repository.js"

export const getAll = async () => {
    return await ProvinceRepository.findAll()
}

const validate = (data) => {
    let error = null
    if (!data.nombre || data.nombre.trim().length < 3) error = "El nombre es obligatorio y debe tener al menos 3 caracteres"
    if (!data.capital || data.capital.trim().length < 3) error = "El nombre completo es obligatorio y debe tener al menos 3 caracteres"
    return error
}

export const create = async (data) => {
    let result = { error: null, data: null }
    const error = validate(data)
    if (error) result.error = error
    if (!error) result.data = await ProvinceRepository.insert(data)
    return result
}

export const update = async (data) => {
    let result = 
    {
        error: null, 
        notFound: false, 
        data: null 
    }
    const error = validate(data)
    if (error) result.error = error
    if (!error) {
        const existing = await ProvinceRepository.findById(data.id)
        if (!existing) result.notFound = true
        if (existing) result.data = await ProvinceRepository.update(data)
    }
    return result
}

export const remove = async (id) => {
    let result = { notFound: false }
    const existing = await ProvinceRepository.findById(id)
    if (!existing) result.notFound = true
    if (existing) await ProvinceRepository.remove(id)
    return result
}