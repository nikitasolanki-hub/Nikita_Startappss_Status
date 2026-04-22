const http = require('http');
const server = http.createServer((req, res) => {
    res.send("Hello");
})
server.listen(3000,() => {
    console.log("Server is on my local area .....")
})