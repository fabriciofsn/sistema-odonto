"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepInvalido = void 0;
const domainException_1 = require("@shared/domainException");
class CepInvalido extends domainException_1.DomainException {
    constructor(message = "Cep inválido") {
        super(message);
        this.message = message;
        this.name = "CepInvalido";
    }
}
exports.CepInvalido = CepInvalido;
//# sourceMappingURL=endereco.exception.js.map