import { DomainException } from "@shared/domainException";

export class CepInvalido extends DomainException {
  constructor(message: string = "Cep inválido") {
    super(message);
    this.message = message;
    this.name = "CepInvalido";
  }
}
