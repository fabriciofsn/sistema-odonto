"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    constructor(message = "Mensagem de erro") {
        super(message);
        this.message = message;
        this.name = "MensagemDeErro";
    }
}
exports.DomainException = DomainException;
