"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const cliente_exception_1 = require("./cliente.exception");
class Cliente {
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.trim().length < 3) {
            throw new cliente_exception_1.ErrorTamanhoMinimoNome();
        }
        if (value.trim().length > 50) {
            throw new cliente_exception_1.ErrorTamanhoMaximoNome();
        }
        this._nome = value;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        if (value <= 0) {
            throw new cliente_exception_1.ErrorIdadeInvalida();
        }
        this._idade = value;
    }
    get CPF() {
        return this._CPF;
    }
    set CPF(value) {
        const regexp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
        if (!regexp.test(value)) {
            throw new cliente_exception_1.ErrorCPFinvalido();
        }
        this._CPF = value;
    }
    get CPFresponsavel() {
        return this._CPFresponsavel;
    }
    set CPFresponsavel(value) {
        const regexp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
        if (value?.length) {
            if (!regexp.test(value)) {
                throw new cliente_exception_1.ErrorCPFinvalido();
            }
            this._CPFresponsavel = value;
        }
        this._CPFresponsavel = value;
    }
    get consulta() {
        return this._consulta;
    }
    set consulta(value) {
        this._consulta = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        if (value.length !== 11) {
            throw new cliente_exception_1.ErrorTelefoneInvalido();
        }
        this._telefone = value;
    }
    constructor(props) {
        let { nome, idade, CPF, consulta, telefone, CPFresponsavel } = props;
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        this.consulta = consulta;
        this.telefone = telefone;
        this.CPFresponsavel = CPFresponsavel;
    }
    static createCliente(props) {
        let { nome, idade, CPF, CPFresponsavel, consulta, telefone } = props;
        return new Cliente({
            nome,
            idade,
            CPF,
            consulta,
            telefone,
            CPFresponsavel,
        });
    }
}
exports.Cliente = Cliente;
