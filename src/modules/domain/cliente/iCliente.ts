import { Consulta } from "../../shared/consulta";

export interface ICliente {
  nome: string;
  idade: string;
  CPF: string;
  consulta: Consulta[];
}
