import { Consulta } from "@modules/shared/consulta";
import { IConsulta } from "@modules/shared/iconsulta";

export class ConsultarDTO {
  public static consultaDTO(consulta: Consulta): IConsulta {
    return {
      data: consulta.data,
      dentista: consulta.dentista,
    };
  }
}
