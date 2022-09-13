const camelCase = require('camel-case');
const BASE_URL = 'https://schoolsadmissions-web-backend-test.azurewebsites.net';
const ROOT_PATH = './src/api';
const API_LIST = [
    'Schools',
];

function generateFetcher() {
    let apiObj = {};
    API_LIST.forEach(key => {
      //const camelCasedName = camelCase(key);
      apiObj[`${key}Api`] = {
        output: `${ROOT_PATH}/${key}.tsx`,
        url: `${BASE_URL}/swagger/service:${key}/swagger.json`,
      };
    });
    return apiObj;
  }
  module.exports = {
    ...generateFetcher(),
  };