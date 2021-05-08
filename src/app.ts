import "reflect-metadata";
import "./database";
import express from 'express';
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import path from "path";
import { routes } from "./routes"






const app = express();

//conectando a pasta public para fazer as vezes client na aplicação
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//utilizando uma rota com o metodo get para renderizar a pagina
app.get("/pages/client", (request, response) =>{
    return response.render("html/client.html");
})

const http = createServer(app);// Criando protocolo http
const io = new Server(http);//Criando protocolo WS

io.on("connection", (socket: Socket) =>{
    console.log("Se conectou", socket.data);
});

//antes das rotas
app.use(express.json());

app.use(routes);


export { http, io};