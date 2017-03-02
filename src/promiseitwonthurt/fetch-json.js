'use strict';

const http = require("q-io/http");

const fetchJson = (url) => {
    return http.request(url).then((r) => r.body.read()).then(JSON.parse);
}

fetchJson('http://localhost:1337').then(console.log);
module.exports = fetchJson;
