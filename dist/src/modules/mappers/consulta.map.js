"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultarDTO = void 0;
class ConsultarDTO {
    static consultaDTO(consulta) {
        consulta.map((dados) => {
            return {
                data: dados.data,
                dentista: dados.dentista,
            };
        });
    }
}
exports.ConsultarDTO = ConsultarDTO;
//# sourceMappingURL=consulta.map.js.map