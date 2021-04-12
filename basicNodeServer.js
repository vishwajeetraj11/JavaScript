const http = require('http');
// console.log(http.STATUS_CODES);

// An example of a web server written with Node which responds with 'Hello World'.
// To run the server, put the code into a file called [File_name].js and execute it with the node program.
// In the terminal navigate to [file_name].js directory and run node [File_name].js
http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
