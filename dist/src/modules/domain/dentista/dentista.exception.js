"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFOIDinvalido = void 0;
const domainException_1 = require("../../shared/domainException");
class DentistaException extends domainException_1.DomainException {
    constructor(message = "Mensagem de erro dentista") {
        super(message);
        this.message = message;
        this.name = "MensagemDeErroDentista";
    }
}
class CFOIDinvalido extends DentistaException {
    constructor(messagem = "CFO inválido") {
        super(messagem);
        this.message = messagem;
        this.name = "CFOinvalido";
    }
}
exports.CFOIDinvalido = CFOIDinvalido;
