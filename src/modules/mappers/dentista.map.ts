import { Dentista } from "@modules/domain/dentista/dentista";
import { IDentista } from "@modules/domain/dentista/iDentista";

export class DentistaDTO {
  public static dentistaDTO(dentista: Dentista): IDentista {
    return {
      nomeDentista: dentista.nomeDentista,
      CFOID: dentista.CFOID,
      cirurgiao: dentista.cirurgiao,
    };
  }
}
