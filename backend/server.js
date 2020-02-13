const http = require("http")
const server = http.createServer()

server.on("connection", (socket) => {
    socket.on("connect", () => {
        console.log("New client connected")
    })

    socket.on("data", (data) => {
        const comment = data.toString("ascii")
        console.log(data)
    })
})

server.listen(80 || process.env.PORT)