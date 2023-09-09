import { Dentista } from "../domain/dentista/dentista";
import { HoraInvalida } from "./consulta.exception";

export class Consulta {
  private _data: Date;
  private _hora: Date;
  private _dentista: Dentista;

  public get data(): Date {
    return this._data;
  }
  public set data(value: Date) {
    this._data = value;
  }

  public get hora(): Date {
    return this._hora;
  }
  public set hora(value: Date) {
    if (value instanceof Date) {
      this._hora = value;
    } else {
      throw new HoraInvalida();
    }
  }

  public get dentista(): Dentista {
    return this._dentista;
  }
  public set dentista(value: Dentista) {
    this._dentista = value;
  }

  constructor(data: Date, hora: Date, dentista: Dentista) {
    this.data = data;
    this.hora = hora;
    this.dentista = dentista;
  }
}
