import { Request, Response } from "express";
import { Cliente } from "../../../../modules/domain/cliente/cliente";
import { Consulta } from "../../../../modules/shared/consulta";
import { Dentista } from "../../../../modules/domain/dentista/dentista";
import { createClienteProps } from "../../../../modules/domain/cliente/iCliente";
import { createDentistaProps } from "../../../../modules/domain/dentista/iDentista";

class CadastrarCliente {
  public cadastro(req: Request, res: Response) {}
}

export const cadastrarCliente = new CadastrarCliente();
