import { Consulta } from "@modules/shared/consulta";

export interface ICliente {
  nome: string;
  idade: number;
  CPF: string;
  CPFresponsavel?: string;
  consulta: Consulta[];
  telefone: string;
}

export type createClienteProps = ICliente;
export type recDadosCliente = Required<ICliente>;
