const { createServer } = require('http');
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const app = next({dev});

const socketIO = require("socket.io");
const server = createServer();
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"]
    }
});//mon instance socketIO transite par mon serveur

app.prepare().then(() => {
    server.listen(3001, (err) => {
        if(err) throw err;
        console.log("Web socket a été lancé sur http://localhost:3001");

        io.on("connection", (socket) => { // ça correspond à un utilisateur qui se connecte!!
            console.log("Connecté!");
            socket.on("reception message", (message, user, target) => {
                console.log("Message", message);
                io.sockets.emit('reception message', message)
            })
            socket.on("lecture message", (user, target) => {
                // io.sockets.emit('reception message', targetDuMessage)
            })
            
            socket.on("disconnect", () =>{
                console.log("utilisateur déconnecté!");
            })
        })
        
    })
})