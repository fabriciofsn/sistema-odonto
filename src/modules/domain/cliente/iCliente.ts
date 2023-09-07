import { Consulta } from "../../shared/consulta";

export interface ICliente {
  nome: string;
  idade: string;
  CPF: string;
  CPFresponsavel?: string;
  consulta: Consulta[];
  telefone: string;
}
