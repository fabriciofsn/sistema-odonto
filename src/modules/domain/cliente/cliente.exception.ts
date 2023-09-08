import { DomainException } from "../../shared/domainException";

class ClienteException extends DomainException {
  constructor(message: string = "Mensagem de erro cliente") {
    super(message);
    this.message = message;
    this.name = "MensagemErroCliente";
  }
}

export class ErrorTamanhoMinimoNome extends ClienteException {
  constructor(
    message: string = "Cliente não pode possuir nome inferior a 3 caracteres"
  ) {
    super(message);
    this.message = message;
    this.name = "ClienteNomeInferiorTresCaracteres";
  }
}

export class ErrorTamanhoMaximoNome extends ClienteException {
  constructor(
    message: string = "Cliente não pode possuir nome maior que 50 caracteres"
  ) {
    super(message);
    this.message = message;
    this.name = "ClienteNomeMaiorQueCinquentaCaracteres";
  }
}

export class ErrorCPFinvalido extends ClienteException {
  constructor(message: string = "CPF inválido") {
    super(message);
    this.message = message;
    this.name = "CPFinvalido";
  }
}

export class ErrorTelefoneInvalido extends ClienteException {
  constructor(message: string = "Telefone inválido") {
    super(message);
    this.message = message;
    this.name = "TelefoneInvalido";
  }
}
