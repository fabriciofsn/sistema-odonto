import { ErrorTamanhoMinimoNome } from "../cliente/cliente.exception";
import { CFOIDinvalido } from "./dentista.exception";
import { IDentista } from "./iDentista";

export class Dentista implements IDentista {
  private _nomeDentista: string;
  private _CFOID: string;
  private _cirurgiao: boolean;

  public get cirurgiao(): boolean {
    return this._cirurgiao;
  }
  private set cirurgiao(value: boolean) {
    this._cirurgiao = value;
  }

  public get nomeDentista(): string {
    return this._nomeDentista;
  }
  private set nomeDentista(value: string) {
    if (value.length < 3) {
      throw new ErrorTamanhoMinimoNome();
    }
    this._nomeDentista = value;
  }

  public get CFOID(): string {
    return this._CFOID;
  }
  private set CFOID(value: string) {
    const regex: RegExp = /^\d{6}\/?\d{2}$/;
    if (!regex.test(value)) {
      throw new CFOIDinvalido();
    }
    this._CFOID = value;
  }

  private constructor(props: IDentista) {
    this.nomeDentista = props.nomeDentista;
    this.CFOID = props.CFOID;
    this.cirurgiao = props.cirurgiao;
  }

  public static createDentista(props: IDentista): Dentista {
    let { nomeDentista, CFOID, cirurgiao } = props;
    return new Dentista({ nomeDentista, CFOID, cirurgiao });
  }
}
