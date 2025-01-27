const { makeEnv, parsers } = require('@sadams/environment');

const env = makeEnv({
  host: {
    parser: parsers.string,
    required: false,
    defaultValue: '0.0.0.0',
    envVarName: 'HOST',
  },
  port: {
    parser: parsers.port,
    required: false,
    defaultValue: 4000,
    envVarName: 'PORT',
  },
});

module.exports = env;
