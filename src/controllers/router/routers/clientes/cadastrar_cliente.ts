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
      let { nome, idade, CPF, CPFresponsavel, consultas, telefone } = req.body;
    } catch (e) {
      console.log(`There was an error${e}`);
    }
  }
}

export const cadastrarCliente = new CadastrarCliente();
