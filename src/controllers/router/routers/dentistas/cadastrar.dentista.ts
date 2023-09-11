import { Dentista } from "@modules/domain/dentista/dentista";
import { IDentista } from "@modules/domain/dentista/iDentista";
import { DentistaDTO } from "@modules/mappers/dentista.map";
import { Request, Response } from "express";

export class CadastrarDentista {
  public cadastrarDentista(req: Request, res: Response) {
    let { nomeDentista, CFOID, cirurgiao }: IDentista = req.body;

    try {
      const dentista = Dentista.createDentista({
        nomeDentista,
        CFOID,
        cirurgiao,
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
