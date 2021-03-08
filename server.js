const http = require('http');
//const hostname = 'luisrvaldez-testapp.herokuapp.com';
const hostname = 'localhost';
const port = 8815;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
//server.on('listenining', function () {
//  console.log('ok, server is running');
//});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//server.listen(port);