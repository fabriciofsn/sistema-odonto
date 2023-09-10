"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = void 0;
const cliente_1 = require("../../../../modules/domain/cliente/cliente");
const dentista_1 = require("../../../../modules/domain/dentista/dentista");
const consulta_1 = require("../../../../modules/shared/consulta");
class CadastrarCliente {
    cadastro(req, res) {
        try {
            let { nome, idade, CPF, CPFresponsavel, telefone } = req.body;
            let { nomeDentista, CFOID, cirurgiao } = req.body;
            let dentista = dentista_1.Dentista.createDentista({
                nomeDentista,
                CFOID,
                cirurgiao,
            });
            let { dia, mes, ano } = req.body;
            let data = new Date(ano, mes - 1, dia).toLocaleDateString();
            let consulta = [new consulta_1.Consulta(data, dentista)];
            const cliente = cliente_1.Cliente.createCliente({
                nome,
                idade,
                CPF,
                CPFresponsavel,
                consulta,
                telefone,
            });
            res.json({
                dados_cliente: cliente,
            });
        }
        catch (e) {
            console.log(`There was an error${e}`);
        }
    }
}
exports.cadastrarCliente = new CadastrarCliente();
//# sourceMappingURL=cadastrar_cliente.js.map