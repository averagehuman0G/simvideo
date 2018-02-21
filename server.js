const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

server.listen(8000);
