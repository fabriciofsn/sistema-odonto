import { Dentista } from "@modules/domain/dentista/dentista";
import { IDentista } from "@modules/domain/dentista/iDentista";
import { DentistaDTO } from "@modules/mappers/dentista.map";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export class CadastrarDentista {
  public async cadastrarDentista(req: Request, res: Response): Promise<void> {
    let { nomeDentista, CFOID, cirurgiao }: IDentista = req.body;
    let prisma = new PrismaClient();
    try {
      const dentista = Dentista.createDentista({
        nomeDentista,
        CFOID,
        cirurgiao,
      });
      await prisma.dentista.create({
        data: {
          nome: dentista.nomeDentista,
          CFOID: dentista.CFOID,
          cirurgiao: dentista.cirurgiao,
        },
      });
      res.json({
        dados_dentista: DentistaDTO.dentistaDTO(dentista),
      });
    } catch (e) {
      console.log(`There was an error! ${e}`);
    }
  }
}

export const cadastrarDentista = new CadastrarDentista();
