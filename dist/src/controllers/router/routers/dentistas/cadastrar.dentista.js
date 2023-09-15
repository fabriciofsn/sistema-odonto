"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarDentista = exports.CadastrarDentista = void 0;
const dentista_1 = require("@modules/domain/dentista/dentista");
const dentista_map_1 = require("@modules/mappers/dentista.map");
class CadastrarDentista {
    async cadastrarDentista(req, res) {
        let { nomeDentista, CFOID, cirurgiao } = req.body;
        try {
            const dentista = dentista_1.Dentista.createDentista({
                nomeDentista,
                CFOID,
                cirurgiao,
            });
            res.json({
                dados_dentista: dentista_map_1.DentistaDTO.dentistaDTO(dentista),
            });
        }
        catch (e) {
            console.log(`There was an error! ${e}`);
        }
    }
}
exports.CadastrarDentista = CadastrarDentista;
exports.cadastrarDentista = new CadastrarDentista();
//# sourceMappingURL=cadastrar.dentista.js.map