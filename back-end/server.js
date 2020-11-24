'use strict';

const Hapi = require('@hapi/hapi');


const server = Hapi.server({
        port: 3001,
        host: 'localhost'
});



server.route({
    method: 'GET',
    path: '/yards',
    handler: (request, h) => {
        return { yards: [{
            siteID: '0070',
            inventory: {
                numberOne: "1000"
            },
            distance: ''
        }]}
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})

server.route({
    method: 'POST',
    path: '/yards',
    handler: (request, h) => {
        console.log(request.payload)
        return h.response('success') 
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})

server.route({
    method: 'POST',
    path: '/',
    handler: (request, h) => {
        console.log(request.payload)
        return h.response('success') 
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
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