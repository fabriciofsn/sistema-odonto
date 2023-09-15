import { Consulta } from "@shared/consulta";
import { ICliente } from "./iCliente";
import {
  EnderecoInvalido,
  ErrorCPFinvalido,
  ErrorIdadeInvalida,
  ErrorTamanhoMaximoNome,
  ErrorTamanhoMinimoNome,
  ErrorTelefoneInvalido,
} from "./cliente.exception";
import { Endereco } from "../endereco/endereco.entity";

export class Cliente implements ICliente {
  private _nome: string;
  private _idade: number;
  private _CPF: string;
  private _CPFresponsavel?: string;
  private _consulta: Consulta[];
  private _telefone: string;
  private _enderecos: Endereco[];

  public get nome(): string {
    return this._nome;
  }
  private set nome(value: string) {
    if (value.trim().length < 3) {
      throw new ErrorTamanhoMinimoNome();
    }

    if (value.trim().length > 50) {
      throw new ErrorTamanhoMaximoNome();
    }

    this._nome = value;
  }

  public get idade(): number {
    return this._idade;
  }
  private set idade(value: number) {
    if (value <= 0) {
      throw new ErrorIdadeInvalida();
    }
    this._idade = value;
  }

  public get CPF(): string {
    return this._CPF;
  }
  private set CPF(value: string) {
    const regexp: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    if (!regexp.test(value)) {
      throw new ErrorCPFinvalido();
    }
    this._CPF = value;
  }

  public get CPFresponsavel(): string | undefined {
    return this._CPFresponsavel;
  }
  private set CPFresponsavel(value: string | undefined) {
    const regexp: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;

    if (value?.length) {
      if (!regexp.test(value)) {
        throw new ErrorCPFinvalido();
      }
      this._CPFresponsavel = value;
    }
    this._CPFresponsavel = value;
  }

  public get consulta(): Consulta[] {
    return this._consulta;
  }
  private set consulta(value: Consulta[]) {
    this._consulta = value;
  }

  public get telefone(): string {
    return this._telefone;
  }
  private set telefone(value: string) {
    if (value.length !== 11) {
      throw new ErrorTelefoneInvalido();
    }
    this._telefone = value;
  }

  public get enderecos(): Endereco[] {
    return this._enderecos;
  }
  private set enderecos(value: Endereco[]) {
    if (value.length < 1) {
      throw new EnderecoInvalido();
    }
    if (value.length > 3) {
      throw new EnderecoInvalido();
    }
    this._enderecos = value;
  }

  private constructor(props: ICliente) {
    let { nome, idade, CPF, consulta, telefone, CPFresponsavel, enderecos } =
      props;
    this.nome = nome;
    this.idade = idade;
    this.CPF = CPF;
    this.consulta = consulta;
    this.telefone = telefone;
    this.CPFresponsavel = CPFresponsavel;
    this.enderecos = enderecos;
  }

  public static createCliente(props: ICliente): Cliente {
    let { nome, idade, CPF, CPFresponsavel, consulta, telefone, enderecos } =
      props;
    return new Cliente({
      nome,
      idade,
      CPF,
      consulta,
      telefone,
      CPFresponsavel,
      enderecos,
    });
  }
}
