import { Dentista } from "../domain/dentista/dentista";

export class Consulta {
  private _data: string;
  private _dentista: Dentista;

  public get data(): string {
    return this._data;
  }
  public set data(value: string) {
    this._data = value;
  }
  public get dentista(): Dentista {
    return this._dentista;
  }
  public set dentista(value: Dentista) {
    this._dentista = value;
  }

  constructor(data: string, dentista: Dentista) {
    this.data = data;
    this.dentista = dentista;
  }
}
