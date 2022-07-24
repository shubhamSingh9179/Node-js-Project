var http = require("http");
let server = http.createServer(function(req, res){
if(req.url == "/")
{
  res.end("<h1>This is the Home Page</h1>") 
  }
if(req.url == "/about")
{
    res.end("<h1>This is the About Page</h1>")  
}
// res.end();
});
server.listen(3306)
