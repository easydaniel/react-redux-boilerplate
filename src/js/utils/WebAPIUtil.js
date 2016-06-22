import rp from 'request-promise';

const WebAPIUtil = {

  GET: () => rp({
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
  }),

  POST: () => rp({
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
  }),

  FORM: () => rp({
    method: 'POST',
    uri: 'POST-URI',
    form: {
      some: 'payload' // Will be urlencoded
    },
    headers: {
      /* 'content-type': 'application/x-www-form-urlencoded' */ // Set automatically
    }
  })
  .then(function (body) {
    // POST succeeded...
  })
  .catch(function (err) {
    // POST failed...
  }),

  FULLRESPONSE: () => rp({
    method: 'PUT',
    uri: 'URI',
    resolveWithFullResponse: true
  })
  .then(function (body) {
    // POST succeeded...
  })
  .catch(function (err) {
    // POST failed...
  }),
};

export default WebAPIUtil;
