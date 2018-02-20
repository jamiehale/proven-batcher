// ES6 support on ES5
require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // Match any network id
            gas: 3500000 // Allow gas for initial transactions
        }
    }
};
