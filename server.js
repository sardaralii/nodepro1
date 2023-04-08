// Load the HTTP module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
