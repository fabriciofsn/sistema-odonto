"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentistaDTO = void 0;
class DentistaDTO {
    static dentistaDTO(dentista) {
        return {
            nomeDentista: dentista.nomeDentista,
            CFOID: dentista.CFOID,
            cirurgiao: dentista.cirurgiao,
        };
    }
}
exports.DentistaDTO = DentistaDTO;
//# sourceMappingURL=dentista.map.js.map