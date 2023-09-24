import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  DentistaException,
  FalhaAoBuscarDentistas,
} from "@modules/domain/dentista/dentista.exception";

class ListarDentistas {
  public async listarDentistas(Req: Request, res: Response) {
    let prisma = new PrismaClient();

    try {
      let dentistas = await prisma.dentista.findMany();
      res.json(dentistas);
    } catch (e) {
      if (e instanceof DentistaException) {
        throw new FalhaAoBuscarDentistas();
      } else {
        console.log(e);
      }
    }
  }
}

export const listarDentistas = new ListarDentistas();
