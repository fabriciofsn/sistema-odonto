import e from "express";
import { DomainException } from "../../../shared/domainException";

export class DentistaException extends DomainException {
  constructor(message: string = "Mensagem de erro dentista") {
    super(message);
    this.message = message;
    this.name = "MensagemDeErroDentista";
  }
}

export class CFOIDinvalido extends DentistaException {
  constructor(messagem: string = "CFO inválido") {
    super(messagem);
    this.message = messagem;
    this.name = "CFOinvalido";
  }
}

export class FalhaAoBuscarDentistas extends DentistaException {
  constructor(message: string = "Falha ao carregar dentistas") {
    super(message);
    this.message = message;
    this.name = "falhaAoCarregarDentistas";
  }
}
