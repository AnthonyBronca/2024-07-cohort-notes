const http = require("http");


const database = {
    Users: [
        { name: "anthony" },
        { name: "sam" },
        { name: "alexi" }
    ]
}

const app = http.createServer((req, res) => {
    // console.log(req);

    let body = "";
    req.on("data", (data) => {
        body += data;
    });

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => { // request is finished assembly the entire request body
        // Parsing the body of the request depending on the Content-Type header
        if (reqBody) {
            switch (req.headers['content-type']) {
                case "application/json":
                    req.body = JSON.parse(reqBody);
                    break;
                case "application/x-www-form-urlencoded":
                    req.body = reqBody
                        .split("&")
                        .map((keyValuePair) => keyValuePair.split("="))
                        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                        .map(([key, value]) => [key, decodeURIComponent(value)])
                        .reduce((acc, [key, value]) => {
                            acc[key] = value;
                            return acc;
                        }, {});
                    break;
                default:
                    break;
            }
            console.log(req.body);
        }})


        // three things we need from the request
        // 1. body
        // 2. url
        // 3. method
        if (req.url === "/users" && req.method === "GET") {
            res.setHeader("Content-Type", "application/json")
            return res.end(JSON.stringify(database))
        }
        if (req.url === "/users" && req.method === "POST") {
            console.log(body);
            return res.end("hello from /users (post)")
        }
        //


        return res.end("hello from the general thing")

    })


    const port = 8000;

    app.listen(port, () => console.log("listening on port ", port));
