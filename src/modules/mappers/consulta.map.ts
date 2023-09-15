import { Consulta } from "@shared/consulta";
import { DentistaDTO } from "./dentista.map";
export class ConsultarDTO {
  public static consultaDTO(consulta: Consulta[]): {} {
    return consulta.map((dados) => {
      return {
        data: dados.data,
        dentista: DentistaDTO.dentistaDTO(dados.dentista),
      };
    });
  }
}
