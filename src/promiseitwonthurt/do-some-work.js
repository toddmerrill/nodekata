'use strict';
const http = require("q-io/http");

const fetch = (url) => {
    return http.request(url).then((r) => r.body.read());
}

fetch('http://localhost:7000').then((id) => {
    return fetch('http://localhost:7001/'+id);
}).then((r) => {
    console.log(JSON.parse(r));
})

// could set up a mock url in a test, but naw... I'm outta here ;)
