"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultarDTO = void 0;
const dentista_map_1 = require("./dentista.map");
class ConsultarDTO {
    static consultaDTO(consulta) {
        return consulta.map((dados) => {
            return {
                data: dados.data,
                dentista: dentista_map_1.DentistaDTO.dentistaDTO(dados.dentista),
            };
        });
    }
}
exports.ConsultarDTO = ConsultarDTO;
//# sourceMappingURL=consulta.map.js.map