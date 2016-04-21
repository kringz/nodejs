/*

Test nodejs server

*/

var http = require('http');

const PORT=3000;

// handles requests and send response
function handleRequest(request, response){
        response.end('Test' + request.url);
}

// create a server

var server = http.createServer(handleRequest);

// start our server

server.listen(PORT, function(){
        // callback triggered when server is successfully listening
        console.log("Server listening on: http://localhost:%s", PORT);
});

