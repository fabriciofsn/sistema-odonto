"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
const consulta_exception_1 = require("./consulta.exception");
class Consulta {
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get hora() {
        return this._hora;
    }
    set hora(value) {
        if (value instanceof Date) {
            this._hora = value;
        }
        else {
            throw new consulta_exception_1.HoraInvalida();
        }
    }
    get dentista() {
        return this._dentista;
    }
    set dentista(value) {
        this._dentista = value;
    }
    constructor(data, hora, dentista) {
        this.data = data;
        this.hora = hora;
        this.dentista = dentista;
    }
}
exports.Consulta = Consulta;
