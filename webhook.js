const http = require('http');
const exec = require('child_process').exec;
const hostname = '0.0.0.0';
const port = 8084;
const server = http.createServer((req, res) => {
  exec('./build.sh',{cwd:'./'}, function(err,stdout){
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
});