import express from 'express';
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

//antes das rotas
app.use(express.json());

app.use(routes);


export default app;