import express from "express";
import config from "config"
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = config.get('port')

app.use(bodyParser.json());

app.listen(4000, () => {
    console.log(`Aplicação escutando a porta ${port}`);
    routes(app);
})