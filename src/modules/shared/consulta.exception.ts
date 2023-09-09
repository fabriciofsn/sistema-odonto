import { DomainException } from "./domainException";

export class HoraInvalida extends DomainException {
  constructor(message: string = "Hora inválida") {
    super(message);
    this.message = message;
    this.name = "HoraInvalida";
  }
}
