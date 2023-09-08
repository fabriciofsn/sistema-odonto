export class DomainException extends Error {
  constructor(message: string = "Mensagem de erro") {
    super(message);
    this.message = message;
    this.name = "MensagemDeErro";
  }
}
