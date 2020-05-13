const http = require("http");

const server = http.createServer(function (req, res) {
    let str = "";
    req.on('data', function (chunk) {
        str += chunk;
    })
    req.on('end', function () {
        console.log(str.toString());
    })
    res.setHeader("Content-Type", "text/html");
    res.setHeader("X-Foo", "bar");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok");
});

server.listen(8088, () => {
    console.log("🍺服务启动成功");
});