const app = require('express')();
const server = require('http').createServer(app);

require("autogitupdater")("/webhook/autogit/A_CUSTOM_PASS_PHRASE", app); // THE URL WILL BE "http://localhost//webhook/autogit/A_CUSTOM_PASS_PHRASE"

server.listen(80);