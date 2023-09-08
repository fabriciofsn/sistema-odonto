import { ErrorTamanhoMinimoNome } from "../cliente/cliente.exception";
import { CFPIDinvalido } from "./dentista.exception";
import { IDentista } from "./iDentista";

export class Dentista {
  private _nome: string;
  private _CFOID: string;
  private _cirurgiao: boolean;

  public get cirurgiao(): boolean {
    return this._cirurgiao;
  }
  public set cirurgiao(value: boolean) {
    this._cirurgiao = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    if (value.length < 3) {
      throw new ErrorTamanhoMinimoNome();
    }
    this._nome = value;
  }

  public get CFOID(): string {
    return this._CFOID;
  }
  public set CFOID(value: string) {
    const regex: RegExp = /^\d{6}\/\d{2}$/;
    if (!regex.test(value)) {
      throw new CFPIDinvalido();
    }
    this._CFOID = value;
  }

  private constructor(nome: string, CFOID: string, cirurgiao: boolean) {
    this.nome = nome;
    this.CFOID = CFOID;
    this.cirurgiao = cirurgiao;
  }

  public static createDentista(props: IDentista): Dentista {
    let { nome, CFOID, cirurgiao } = props;
    return new Dentista(nome, CFOID, cirurgiao);
  }
}
