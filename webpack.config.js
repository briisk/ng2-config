// Look in ./config folder for webpack.dev.js
const apiConfig = require('./config/api.config');

switch (apiConfig.env) {
  case 'prod':
  case 'production':
  case 'staging':
  case 'workspace': {
    module.exports = require('./config/webpack.prod');
    break;
  }
  case 'test':
  case 'testing': {
    module.exports = require('./config/webpack.test');
    break;
  }
  case 'dev':
  case 'development':
  default: {
    module.exports = require('./config/webpack.dev');
  }
}
