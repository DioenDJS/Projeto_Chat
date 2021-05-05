import "reflect-metadata";
import "./database";
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import app from './app';

const http = createServer(app);// Criando protocolo http
const io = new Server(http);//Criando protocolo WS

io.on("connection", (Socket: Socket) =>{
    console.log("Se conectou", Socket.id);
});

http.listen(3333, () =>{
    
    console.log("servidor esta rodando !!! ");
});// pasusando no minuto 18:35