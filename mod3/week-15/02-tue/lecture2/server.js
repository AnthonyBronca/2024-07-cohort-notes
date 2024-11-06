const http = require("http");

const server = http.createServer((req, res) => {
    // declare what type of data we are sending
    // res.setHeader("Content-Type", "application/json");
    // res.end(JSON.stringify({"Hello": "World"}));

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1 style="color: red">404 You are in the wrong spot buddy...</h1>`)

})


const port = 8000;

server.listen(port, ()=> console.log("Listening on port", port))
