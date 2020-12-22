'use strict';

const Hapi = require('@hapi/hapi');
const Monk = require('monk');

const server = Hapi.server({
        port: 3001,
        host: 'localhost'
})

const getYardsCollection = async () => {
    const connectionString = "mongodb+srv://nightTest:test123@yardsdatabase.dukkb.mongodb.net/yardsDatabase?retryWrites=true&w=majority"
    const db = Monk(connectionString)
    const yards = await db.get('yards')
    return yards
}

// server.route({ 
//     method: 'GET',
//     path: '/yards',
//     handler: async (request, h) => {
//         const yards = await getYardsCollection()
//         const yardObjects = await yards.find()
//         return { yards: yardObjects ? yardObjects : [] }
//     },
//     config: {
//         cors: {
//             origin: ['*'],
//             additionalHeaders: ['cache-control', 'x-requested-with']
//         }
//     }
// })

server.route({ 
    method: 'GET',
    path: '/yards',
    handler: async (request, h) => {
        const yards = await getYardsCollection()
        const yardObjects = await yards.find()
        return { yards: yardObjects ? yardObjects : [] }
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
    handler: async (request, h) => {
        const yards = await getYardsCollection() 
        yards.insert(request.payload)
        console.log("SERVERDATA" , request.payload)
        return h.response('success') 
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})


// server.route({ 
//     method: 'PUT',
//     path: "/yards/{id}",
//     handler: async (request, h) => {
//         const yards = await getYardsCollection()
//         const yardObjects = await yards.findById(request.params.id).exec()
//         return { yards: yardObjects ? yardObjects : [] }
//     },
//     config: {
//         cors: {
//             origin: ['*'],
//             additionalHeaders: ['cache-control', 'x-requested-with']
//         }
//     }
// })

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