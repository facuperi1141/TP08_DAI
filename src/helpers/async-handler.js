// El fn recibe el metodo del endpoint como parametro y despues 
// el next lo mantiene como promesa para enviar al middleware si es que tiene un error

export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
};