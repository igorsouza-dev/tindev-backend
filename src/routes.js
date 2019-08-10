const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    const query = req.query;
    let message = 'Hello, ';
    if(query.name) {
        message += query.name;
    } else {
        message += 'World';
    }
    message += '!';
    return res.json({message: message});
});

routes.post('/devs', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;