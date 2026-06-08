import pool from '../configs/db-configs.js';


export const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM provinces ")
    return rows;
}

export const insert = async (data) => {
    const { nombre, capital, latitud, longitud} = data;
    const { rows } = await pool.query(
        `INSERT INTO provinces (nombre, capital, latitud, longitud)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [nombre, capital, latitud, longitud]
    );
    return rows[0]
}

export const update = async (data, id) => {
    const { nombre, capital, latitud, longitud } = data;

    const { rows } = await pool.query(
        `UPDATE provinces
         SET nombre = $1,
             capital = $2,
             latitud = $3,
             longitud = $4
         WHERE id = $5
         RETURNING *`,
        [nombre, capital, latitud, longitud, id]
    );

    return rows[0];
}

export const remove = async (id) => {
    await pool.query("DELETE FROM provinces WHERE id = $1", [id])
}

export const returnIdByName = async (nombre) => {
    const { rows } = await pool.query(
        `SELECT id 
         FROM provinces
         WHERE nombre = $1`,
        [nombre]
    );

    return rows[0];
}