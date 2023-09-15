import { Consulta } from "@shared/consulta";
import { Endereco } from "../endereco/endereco.entity";

export interface ICliente {
  nome: string;
  idade: number;
  CPF: string;
  CPFresponsavel?: string;
  consulta: Consulta[];
  telefone: string;
  enderecos: Endereco[];
}

export type createClienteProps = ICliente;
