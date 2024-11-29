const http = require("http");

const database = {
    Users: [
        {name: "anthony"},
        {name: "sam"},
        {name: "alexi"}
    ]
}

const app = http.createServer((req, res) =>{
    console.log(req.url);
    console.log(req.method);

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
        }
    })
    // 3 things that we gradp from the request object
    // 1. Method

    // 2. url
    // 3. body
    if(req.url === "/users" && req.method === "GET"){
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({Users: database.Users}))
    }

    if(req.url === "/users/delete" && req.method === "POST"){
        for(let user of database.Users){
            console.log(typeof reqBody)
            if(user.name === reqBody.name){
                console.log("here")
                delete user;
            }
        }

        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ Users: database.Users }))
    }




    return res.end("hello");



});



const port = 8000;

app.listen(port, () => console.log("listening on port ", port));
