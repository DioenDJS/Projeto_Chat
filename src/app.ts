import express from 'express';
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import { routes } from "./routes"

const app = express();

const http = createServer(app);// Criando protocolo http
const io = new Server(http);//Criando protocolo WS

io.on("connection", (Socket: Socket) =>{
    console.log("Se conectou", Socket.id);
});

//antes das rotas
app.use(express.json());

app.use(routes);


export default app;