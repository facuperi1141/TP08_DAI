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
    let result = {
        error: null,
        notFound: false,
        data: null
    };
    const error = validate(data);
    if (error) {
        result.error = error;
    }
    const existing = await ProvinceRepository.returnIdByName(data.nombre);
    if (!existing) result.notFound = true;
    else {
    const updatedProvince = await ProvinceRepository.update(data, existing.id);
    result.data = updatedProvince;
    }
    return result;
}

export const remove = async (data) => {
    let result = {
        notFound: false
    };

    const existing = await ProvinceRepository.returnIdByName(data.nombre);
    console.log(existing)

    if (!existing) result.notFound = true;
    else await ProvinceRepository.remove(existing.id);
    
    return result;
}