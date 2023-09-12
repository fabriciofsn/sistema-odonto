import { Request, Response } from "express";
import { Cliente } from "@modules/domain/cliente/cliente";
import { Dentista } from "@modules/domain/dentista/dentista";
import { IDentista } from "@modules/domain/dentista/iDentista";
import { Consulta } from "@shared/consulta";
import { ClienteDTO } from "@modules/mappers/cliente.map";

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
      let data: string = new Date(ano, mes - 1, dia).toLocaleDateString();
      let consulta: Consulta[] = [new Consulta(data, dentista)];
      const cliente = Cliente.createCliente({
        nome,
        idade,
        CPF,
        CPFresponsavel,
        consulta,
        telefone,
      });

      res.json({
        dados_cliente: ClienteDTO.clienteDTO(cliente),
      });
    } catch (e) {
      console.log(`There was an error${e}`);
    }
  }
}

export const cadastrarCliente = new CadastrarCliente();
