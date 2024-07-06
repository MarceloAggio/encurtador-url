import { Express, Request, Response } from "express";
import { createShortUrl, handleGetClicks, handleRedirect } from "./encurtarUrl";

function routes(app: Express) {

   //Rota Raiz
   app.get("/", (req: Request, res: Response) => {
      return res.send("Rota Raiz")
   });

   // Rota para criar URL encurtada
   app.post("/api/url", createShortUrl);

   //Rota para o link encurtado
   app.get("/api/:slug", handleRedirect);

   // Rota para obter a quantidade de cliques
   app.get("/api/clicks/:slug", handleGetClicks);

}

export default routes;