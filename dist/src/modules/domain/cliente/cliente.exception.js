"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorIdadeInvalida = exports.ErrorTelefoneInvalido = exports.ErrorCPFinvalido = exports.ErrorTamanhoMaximoNome = exports.ErrorTamanhoMinimoNome = void 0;
const domainException_1 = require("../../../shared/domainException");
class ClienteException extends domainException_1.DomainException {
    constructor(message = "Mensagem de erro cliente") {
        super(message);
        this.message = message;
        this.name = "MensagemErroCliente";
    }
}
class ErrorTamanhoMinimoNome extends ClienteException {
    constructor(message = "Cliente não pode possuir nome inferior a 3 caracteres") {
        super(message);
        this.message = message;
        this.name = "ClienteNomeInferiorTresCaracteres";
    }
}
exports.ErrorTamanhoMinimoNome = ErrorTamanhoMinimoNome;
class ErrorTamanhoMaximoNome extends ClienteException {
    constructor(message = "Cliente não pode possuir nome maior que 50 caracteres") {
        super(message);
        this.message = message;
        this.name = "ClienteNomeMaiorQueCinquentaCaracteres";
    }
}
exports.ErrorTamanhoMaximoNome = ErrorTamanhoMaximoNome;
class ErrorCPFinvalido extends ClienteException {
    constructor(message = "CPF inválido") {
        super(message);
        this.message = message;
        this.name = "CPFinvalido";
    }
}
exports.ErrorCPFinvalido = ErrorCPFinvalido;
class ErrorTelefoneInvalido extends ClienteException {
    constructor(message = "Telefone inválido") {
        super(message);
        this.message = message;
        this.name = "TelefoneInvalido";
    }
}
exports.ErrorTelefoneInvalido = ErrorTelefoneInvalido;
class ErrorIdadeInvalida extends ClienteException {
    constructor(message = "Idade inválida") {
        super(message);
        this.message = message;
        this.name = "IdadeInvalida";
    }
}
exports.ErrorIdadeInvalida = ErrorIdadeInvalida;
//# sourceMappingURL=cliente.exception.js.map