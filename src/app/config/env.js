const environment = process.env.REACT_APP_NODE_ENV
  ? process.env.REACT_APP_NODE_ENV
  : 'fuji';
const ENV = require(`./envs/${environment}`);
module.exports = ENV;
