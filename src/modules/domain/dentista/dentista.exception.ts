import { DomainException } from "../../../shared/domainException";

class DentistaException extends DomainException {
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
