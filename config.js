exports.PORT = process.env.PORT || 3000;

exports.SECRET_KEY = process.env.SECRET_KEY || 'secretkey'
exports.SALT_ROUNDS = process.env.SALT_ROUNDS || 2

exports.DB_USER = process.env.DB_USER || 'aleuwu'
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'aleuwu'
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_NAME = process.env.DB_NAME || "tetris_test";
exports.DB_PORT = process.env.DB_PORT || 5432;