'use strict';

const Hapi = require('@hapi/hapi');


const server = Hapi.server({
        port: 3000,
        host: 'localhost'
});


server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'hello world';
    }
})


// start the server
async function start() {
    try  {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("server running at:", server.info.uri)
}

start();