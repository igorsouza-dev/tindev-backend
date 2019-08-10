const express =  require('express');

const server = express();

server.get('/', (req, res) => {
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

server.listen(8080);