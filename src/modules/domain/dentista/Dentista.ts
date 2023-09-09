import { ErrorTamanhoMinimoNome } from "../cliente/cliente.exception";
import { CFOIDinvalido } from "./dentista.exception";
import { IDentista } from "./iDentista";

export class Dentista implements IDentista {
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
    const regex: RegExp = /^\d{6}\d{2}$/;
    if (!regex.test(value)) {
      throw new CFOIDinvalido();
    }
    this._CFOID = value;
  }

  private constructor(props: IDentista) {
    this.nome = props.nome;
    this.CFOID = props.CFOID;
    this.cirurgiao = props.cirurgiao;
  }

  public static createDentista(props: IDentista): Dentista {
    let { nome, CFOID, cirurgiao } = props;
    return new Dentista({ nome, CFOID, cirurgiao });
  }
}
