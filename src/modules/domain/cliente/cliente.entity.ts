import { Consulta } from "@shared/consulta";
import { ICliente } from "./cliente.interface";
import {ClienteExceptions} from "./cliente.exception";
import { Endereco } from "../endereco/endereco.entity";

export class Cliente implements ICliente {
  private _nome: string;
  private _idade: number;
  private _CPF: string;
  private _CPFresponsavel?: string;
  private _consulta: Consulta[];
  private _telefone: string;
  private _enderecos: Endereco[];


  public static TAMANHO_MAXIMO_NOME = 50;
  public static TAMANHO_MINIMO_NOME = 3;

  public get nome(): string {
    return this._nome;
  }
  private set nome(nome: string) {
    if (nome.trim().length < Cliente.TAMANHO_MAXIMO_NOME) {
      throw new ClienteExceptions.ErrorTamanhoMinimoNome();
    }

    if (nome.trim().length > Cliente.TAMANHO_MINIMO_NOME) {
      throw new ClienteExceptions.ErrorTamanhoMaximoNome();
    }

    this._nome = nome;
  }

  public get idade(): number {
    return this._idade;
  }
  private set idade(idade: number) {
    if (idade <= 0) {
      throw new ClienteExceptions.ErrorIdadeInvalida();
    }
    this._idade = idade;
  }

  public get CPF(): string {
    return this._CPF;
  }
  private set CPF(CPF: string) {
    const regexp: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    if (!regexp.test(CPF)) {
      throw new ClienteExceptions.ErrorCPFinvalido();
    }
    this._CPF = CPF;
  }

  public get CPFresponsavel(): string | undefined {
    return this._CPFresponsavel;
  }
  private set CPFresponsavel(CPF: string | undefined) {
    const regexp: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;

    if (CPF?.length) {
      if (!regexp.test(CPF)) {
        throw new ClienteExceptions.ErrorCPFinvalido();
      }
      this._CPFresponsavel = CPF;
    }
    this._CPFresponsavel = CPF;
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
      throw new ClienteExceptions.ErrorTelefoneInvalido();
    }
    this._telefone = value;
  }

  public get enderecos(): Endereco[] {
    return this._enderecos;
  }
  private set enderecos(value: Endereco[]) {
    if (value.length < 1) {
      throw new ClienteExceptions.EnderecoInvalido();
    }
    if (value.length > 3) {
      throw new ClienteExceptions.EnderecoInvalido();
    }
    this._enderecos = value;
  }

  private constructor(props: ICliente) {
    let { nome, idade, CPF, consulta, telefone, CPFresponsavel, enderecos } = props;
    this.nome = nome;
    this.idade = idade;
    this.CPF = CPF;
    this.consulta = consulta;
    this.telefone = telefone;
    this.CPFresponsavel = CPFresponsavel;
    this.enderecos = enderecos;
  }

  public static createCliente(props: ICliente): Cliente {
    return new Cliente(props);
  }
}
