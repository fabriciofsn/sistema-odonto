"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const endereco_exception_1 = require("./endereco.exception");
class Endereco {
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    get cep() {
        return this._cep;
    }
    set cep(value) {
        const regexp = /^\d{5}\-?\d{3}/;
        if (!regexp.test(value)) {
            console.log(value);
            throw new endereco_exception_1.CepInvalido();
        }
        this._cep = value;
    }
    get rua() {
        return this._rua;
    }
    set rua(value) {
        this._rua = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get bairro() {
        return this._bairro;
    }
    set bairro(value) {
        this._bairro = value;
    }
    constructor(estado, cidade, cep, bairro, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
    }
}
exports.Endereco = Endereco;
//# sourceMappingURL=endereco.entity.js.map