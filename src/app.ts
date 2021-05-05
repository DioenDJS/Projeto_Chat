import express from 'express';

import { routes } from "./routes"

const app = express();



//antes das rotas
app.use(express.json());

app.use(routes);


export default app;