'use strict';
const client= require('request');
const Hapi = require('hapi');
const SERVER_HOST = process.env.SERVER_SERVICE_HOST || 'server';
const SERVER_PORT = process.env.SERVER_SERVICE_PORT || 8080;
const SERVER_URL = 'http://' + SERVER_HOST + ':' + SERVER_PORT + '/api/ping';


const server = new Hapi.Server();
server.connection({port:9000});

server.route({
	method: 'GET',
	path:'/',
	handler: HandlerFunction
});

function HandlerFunction (request, reply) {

	client
	.get(SERVER_URL)
	.on('response', reply)
	.on('error', (err) =>{ 
		console.error(err);
		reply(err)});
}


server.start((err) => {
	if (err) {
		console.error(err);
	}

	console.log(`Client runnig at: ${server.info.uri}`);
});


