import { Consulta } from "@shared/consulta";
import { IConsulta } from "@shared/iconsulta";

export class ConsultarDTO {
  public static consultaDTO(consulta: Consulta[]) {
    consulta.map((dados) => {
      return {
        data: dados.data,
        dentista: dados.dentista,
      };
    });
  }
}
