var http = require('http')
var url = require('url')
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/align'})
//   res.write('hello world')
//   res.end()


// }).listen(9000)

 
function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;