import { Dentista } from "../domain/dentista/dentista";

export class Consulta {
  private _data: Date;
  private _dentista: Dentista;

  public get data(): Date {
    return this._data;
  }
  public set data(value: Date) {
    this._data = value;
  }
  public get dentista(): Dentista {
    return this._dentista;
  }
  public set dentista(value: Dentista) {
    this._dentista = value;
  }

  constructor(data: Date, dentista: Dentista) {
    this.data = data;
    this.dentista = dentista;
  }
}
