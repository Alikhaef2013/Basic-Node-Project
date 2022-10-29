// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");
   response.write("<h3>Ali Khaef ~ f15j638</h3> \
         <p>Running node server on port 3010</p>"); 
   response.end();
}).listen(3010);
