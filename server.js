var http = require("http");
var fs = require("fs");
var path = require("path");
var os = require("os");

var PORT = process.env.PORT || 3456;
var gameFile = path.join(__dirname, "moba_game.html");

// Find LAN IP
function getLANIP() {
  var ifaces = os.networkInterfaces();
  for (var name in ifaces) {
    for (var i = 0; i < ifaces[name].length; i++) {
      var iface = ifaces[name][i];
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

var server = http.createServer(function(req, res) {
  if (req.url === "/" || req.url === "/index.html") {
    var html = fs.readFileSync(gameFile, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  } else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, function() {
  var lanIP = getLANIP();
  console.log("============================================");
  console.log("  Canyon War MOBA Server");
  console.log("============================================");
  console.log("");
  console.log("  Local:   http://localhost:" + PORT);
  console.log("  Network: http://" + lanIP + ":" + PORT);
  console.log("");
  console.log("  Share the Network URL with friends!");
  console.log("============================================");
});
