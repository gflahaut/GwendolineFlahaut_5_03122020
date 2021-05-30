
const {createServer} = require('http');

const server = createServer();

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'text/html');  
  response.end('<h1>Hello World</h1>');

  console.log(request.headers);                     
  console.log(response.getHeaders());               
});

server.listen(4000);