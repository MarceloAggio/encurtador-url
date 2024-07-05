import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

// Função Para criar URL
export async function createShortUrl(req: Request, res: Response) {
    try {
        // capturar longUrl do corpo da requisição
        const { longUrl } = req.body;

        // Gerar um slug único usando nanoid
        const slug = nanoid(8);

        // Enviando os valores para o banco de dados
        const newUrl = await prisma.url.create({
            data: {
                slug,
                longUrl,
                clicks: 0,
            },
        });

        // Retornar a URL criada
        return res.send(newUrl);

    } catch (error) {
        console.error("Erro ao encurtar a URL:", error);
        return res.sendStatus(500);
    }
}

//Função para redirecionar
export async function handleRedirect(req: Request, res: Response) {
    const { slug } = req.params;

    try {
        const shortUrl = await prisma.url.findFirst({
            where: { slug },
        });

        if (!shortUrl) {
            return res.sendStatus(404);
        }

        // Atualizar os clicks
        await prisma.url.update({
            where: { slug },
            data: {
                clicks: { increment: 1 }, 
            },
        });

        //Retorno com redirecionamento
        return res.redirect(shortUrl.longUrl);

    } catch (error) {

        console.error("Erro ao resgatar URL:", error);
        return res.sendStatus(500);
    }
}

//Função para ver quantos clicks o link teve
export async function handleGetClicks(req: Request, res: Response) {
    const { slug } = req.params;

    try {
        const shortUrl = await prisma.url.findFirst({
            where: { slug },
        });

        if (!shortUrl) {
            return res.sendStatus(404);
        }

        // Retorna a quantidade de cliques
        return res.json({ clicks: shortUrl.clicks });

    } catch (error) {
        console.error("Erro ao resgatar quantidade de cliques:", error);
        return res.sendStatus(500);
    }
}
