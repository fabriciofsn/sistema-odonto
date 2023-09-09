"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dentista = void 0;
const cliente_exception_1 = require("../cliente/cliente.exception");
const dentista_exception_1 = require("./dentista.exception");
class Dentista {
    get cirurgiao() {
        return this._cirurgiao;
    }
    set cirurgiao(value) {
        this._cirurgiao = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3) {
            throw new cliente_exception_1.ErrorTamanhoMinimoNome();
        }
        this._nome = value;
    }
    get CFOID() {
        return this._CFOID;
    }
    set CFOID(value) {
        const regex = /^\d{6}\/?\d{2}$/;
        if (!regex.test(value)) {
            throw new dentista_exception_1.CFOIDinvalido();
        }
        this._CFOID = value;
    }
    constructor(props) {
        this.nome = props.nome;
        this.CFOID = props.CFOID;
        this.cirurgiao = props.cirurgiao;
    }
    static createDentista(props) {
        let { nome, CFOID, cirurgiao } = props;
        return new Dentista({ nome, CFOID, cirurgiao });
    }
}
exports.Dentista = Dentista;
