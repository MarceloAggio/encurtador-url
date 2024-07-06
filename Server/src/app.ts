import express from "express";
import config from "config"
import routes from "./routes";
import bodyParser from "body-parser";
import cors from 'cors'
import { corsConfig } from "../config/config";

const app = express();
const port = config.get('port')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.listen(4000, () => {
    console.log(`Aplicação escutando a porta ${port}`);
    corsConfig(app);
    routes(app);
})