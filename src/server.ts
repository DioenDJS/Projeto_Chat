import "reflect-metadata";
import "./database";
import app from './app';

app.listen(3000, () =>{//dividino as responsabilidades
    
    console.log("servidor esta rodando !!! ");
});