import { CepInvalido } from "./endereco.exception";

export class Endereco {
  private _estado: string;
  private _cidade: string;
  private _cep: string;
  private _rua: string;
  private _numero: number;

  public get estado(): string {
    return this._estado;
  }
  public set estado(value: string) {
    this._estado = value;
  }

  public get cidade(): string {
    return this._cidade;
  }
  public set cidade(value: string) {
    this._cidade = value;
  }

  public get cep(): string {
    return this._cep;
  }
  public set cep(value: string) {
    const regexp: RegExp = /^\d{5}\-?\d{3}$/;
    if (!regexp.test(value)) {
      throw new CepInvalido();
    }
    this._cep = value;
  }

  public get rua(): string {
    return this._rua;
  }
  public set rua(value: string) {
    this._rua = value;
  }

  public get numero(): number {
    return this._numero;
  }
  public set numero(value: number) {
    this._numero = value;
  }

  constructor(
    estado: string,
    cidade: string,
    cep: string,
    rua: string,
    numero: number
  ) {
    this.estado = estado;
    this.cidade = cidade;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
  }
}
