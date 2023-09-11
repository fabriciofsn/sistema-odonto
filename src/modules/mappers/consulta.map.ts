import { Consulta } from "@shared/consulta";
import { IConsulta } from "@shared/iconsulta";

export class ConsultarDTO {
  public static consultaDTO(consulta: Consulta): IConsulta {
    return {
      data: consulta.data,
      dentista: consulta.dentista,
    };
  }
}
