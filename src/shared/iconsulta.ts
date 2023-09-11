import { Dentista } from "@modules/domain/dentista/dentista";

export interface IConsulta {
  data: string;
  dentista: Dentista;
}

export type typeConsulta = IConsulta;
