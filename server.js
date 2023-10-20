const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.Server({
        port: 3003,
        host: 'localhost'
    });

    // Route that responds with "OK"
    server.route({
        method: 'GET',
        path: '/status',
        handler: (request, h) => {
            return 'OK';
        }
    });

    // Route that blocks the event loop for 1 minute
    server.route({
        method: 'GET',
        path: '/block',
        handler: async (request, h) => {
            // Simulate a long-running task that blocks the event loop
           for(var i = 0; i < 10000000000; i++) {
               const a = i + i;
           }

            return i;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
