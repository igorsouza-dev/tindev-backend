const express =  require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const config = require('../config');
const cors = require('cors');
const server = express();

mongoose.connect(config.db_uri, { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8080);