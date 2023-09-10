"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get dentista() {
        return this._dentista;
    }
    set dentista(value) {
        this._dentista = value;
    }
    constructor(data, dentista) {
        this.data = data;
        this.dentista = dentista;
    }
}
exports.Consulta = Consulta;
