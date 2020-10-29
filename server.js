const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const start_appRoute= require("./routing");

const app = express();
const port = 8000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',start_appRoute);

const server= http.createServer(app);
server.listen(port);
server.on('listening', ()=>{
	console.log('listening on port', port)
});