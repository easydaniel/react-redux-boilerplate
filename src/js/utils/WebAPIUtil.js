var request = require('request-promise');

const WebAPIUtil = {

  GET: () => request({
    uri: 'GET-URI',
    qs: {
      param: 'value' // -> uri + '?param=value'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  })
  .then((res) => {
    return res;
  })
  .catch((err) => {
    // POST failed...
  });

  POST: () => request({
    method: 'POST',
    uri: "POST-URI",
    body: {
      some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
  })
  .then((res) => {
    return res;
  })
  .catch((err) => {
    // POST failed...
  })
};

export default WebAPIUtil;
