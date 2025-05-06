//une fonction qui retourne une erreur avec son status
const createError = (status, message, options = null) => {
const error = new Error(message);
error.status = status;
error.options = options;

return error;
}


export default createError;