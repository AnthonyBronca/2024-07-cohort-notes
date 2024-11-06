const http = require("http");

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404 You hit a bad url dummy</h1>");

    // res.end(JSON.stringify({"hello": "world"}))
})

const port = 8000;

server.listen(port, ()=> console.log("listening on port", port));
