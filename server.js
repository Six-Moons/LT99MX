const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});