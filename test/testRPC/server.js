const { RPCServer } = require('../../src');
const { packet } = require('tiny-application-layer-protocol');
new RPCServer({host: '127.0.0.1', port: 80}, function(client) {
    client.on('message', (data) => {
        console.log('receive', data);
        client.write(packet('world', data.seq));
    });
});
