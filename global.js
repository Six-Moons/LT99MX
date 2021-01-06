const respuesta = (res, mensaje, codigo, data) => {
	res.statusMessage = mensaje;
	return res.status(codigo).json(data);
}

const mensajeDeError = (res, err, errMsg, msg, codigo) => {
	console.log(errMsg, err);
	return respuesta(res, msg, codigo, {status: codigo, message: msg});
}

// Verify Token
const verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

const tablaUsuarios = 'usuarios'  // Nombre de la tabla de usuarios dentro de la base de datos
const tablaInsignias = 'insignias' // Nombre de la tabla de usuarios dentro de la base de datos
const tablaInsigniasObtenidas = 'InsigniaObtenida' // Nombre de la tabla de usuarios dentro de la base de datos

module.exports = {
    respuesta,
	mensajeDeError,
    verifyToken,
    tablaUsuarios,
    tablaInsignias,
    tablaInsigniasObtenidas
}