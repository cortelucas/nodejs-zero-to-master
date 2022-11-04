"use strict";
exports.__esModule = true;
var http_1 = require("http");
var port = 3000;
var server = (0, http_1.createServer)(function (request, response) {
    switch (request.url) {
        case '/': {
            if (request.method === 'GET') {
                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify({
                    "message": "Hello World"
                }));
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end();
        }
    }
});
server.listen(port, function () {
    console.log("Server is running in port ".concat(port));
});
