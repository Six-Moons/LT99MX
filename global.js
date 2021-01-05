const respuesta = (res, mensaje, codigo, data) => {
	res.statusMessage = mensaje;
	return res.status(codigo).json(data);
}

const mensajeDeError = (res, err, errMsg, msg, codigo) => {
	console.log(errMsg, err);
	return respuesta(res, msg, codigo, {status: codigo, message: msg});
}

module.exports = {
    respuesta,
    mensajeDeError
}