"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoraInvalida = void 0;
const domainException_1 = require("./domainException");
class HoraInvalida extends domainException_1.DomainException {
    constructor(message = "Hora inválida") {
        super(message);
        this.message = message;
        this.name = "HoraInvalida";
    }
}
exports.HoraInvalida = HoraInvalida;
