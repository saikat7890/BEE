const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 4000

//create server will take request listener which is called on any incoming request
const server = http.createServer((req, res)=>{
    console.log(req.method);
    console.log(req.url);
    if(req.url == "/" || req.url == "/home"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home Page");
    } else if (req.url == "/api/user"){
        res.writeHead(200, {"Content-Type": "application/json"});
        const user = {name:"Sudeep", gender: "male"};
        res.end(JSON.stringify(user));
    } else if (req.url == "/api/images"){

        const imagePath = path.join(__dirname, "/heroImg.png");
        fs.readFile(imagePath, (err, data) => {
            if(err){
                res.end("Image not found");
            } else {
                res.writeHead(200, {"Content-Type": "image/png"});
                res.end(data);
            }
        })
        
    }
});
server.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});