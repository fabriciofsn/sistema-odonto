import { Request, Response } from "express";
import { Cliente } from "../../../../modules/domain/cliente/cliente";
import { Consulta } from "../../../../modules/shared/consulta";
import { Dentista } from "../../../../modules/domain/dentista/dentista";
import {
  ICliente,
  createClienteProps,
} from "../../../../modules/domain/cliente/iCliente";
import {
  IDentista,
  createDentistaProps,
} from "../../../../modules/domain/dentista/iDentista";

class CadastrarCliente {
  public cadastro(req: Request, res: Response) {
    try {
      let { nome, idade, CPF, CPFresponsavel, telefone } = req.body;
      let { nomeDentista, CFOID, cirurgiao }: IDentista = req.body;

      let dentista: Dentista = Dentista.createDentista({
        nomeDentista,
        CFOID,
        cirurgiao,
      });
      let { dia, mes, ano } = req.body;
      let consulta: Consulta[] = [
        new Consulta(new Date(ano - dia - mes), dentista),
      ];

      const cliente = Cliente.createCliente({
        nome,
        idade,
        CPF,
        CPFresponsavel,
        consulta,
        telefone,
      });
      console.log(cliente);
      res.json({
        dados: cliente,
      });
    } catch (e) {
      console.log(`There was an error${e}`);
    }
  }
}

export const cadastrarCliente = new CadastrarCliente();
