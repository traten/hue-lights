const fetch = require('node-fetch');
const dotenv = require('dotenv');
const Server = require('./Server.js');
dotenv.config();

Server(fetch).listen(3000);
