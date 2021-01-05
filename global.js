exports.respuesta = (res, mensaje, codigo, data) => {
	res.statusMessage = mensaje;
	return res.status(codigo).json(data);
}

exports.mensajeDeError = (res, err, errMsg, msg, codigo) => {
	console.log(errMsg, err);
	return valueToReturn(res, msg, codigo, {status: codigo, message: msg});
}