import { Consulta } from "../../shared/consulta";
import { ICliente } from "./ICliente";
import {
  ErrorCPFinvalido,
  ErrorTamanhoMaximoNome,
  ErrorTamanhoMinimoNome,
} from "./cliente.exception";

export class Cliente {
  private _nome: string;
  private _idade: string;
  private _CPF: string;
  private _consulta: Consulta[];

  public get nome(): string {
    return this._nome;
  }
  private set nome(value: string) {
    if (value.length < 3) {
      throw new ErrorTamanhoMinimoNome();
    }

    if (value.length > 50) {
      throw new ErrorTamanhoMaximoNome();
    }

    this._nome = value;
  }

  public get idade(): string {
    return this._idade;
  }
  private set idade(value: string) {
    this._idade = value;
  }

  public get CPF(): string {
    return this._CPF;
  }
  private set CPF(value: string) {
    const regexp: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}/$;
    if (!regexp.test(value)) {
      throw new ErrorCPFinvalido();
    }
    this._CPF = value;
  }

  public get consulta(): Consulta[] {
    return this._consulta;
  }
  private set consulta(value: Consulta[]) {
    this._consulta = value;
  }

  private constructor(
    nome: string,
    idade: string,
    CPF: string,
    consulta: Consulta[]
  ) {
    this.nome = nome;
    this.idade = idade;
    this.CPF = CPF;
  }

  public static createCliente(props: ICliente): Cliente {
    let { nome, idade, CPF, consulta } = props;
    return new Cliente(nome, idade, CPF, consulta);
  }
}
