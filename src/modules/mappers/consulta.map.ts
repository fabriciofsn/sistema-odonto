import { Consulta } from "@shared/consulta";

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
