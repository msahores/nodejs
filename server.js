const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Node Page</title></head>');
  res.write('<body><h1>Hello Node!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);