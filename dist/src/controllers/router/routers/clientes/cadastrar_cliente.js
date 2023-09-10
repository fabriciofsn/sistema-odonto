"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = void 0;
const cliente_1 = require("../../../../modules/domain/cliente/cliente");
const consulta_1 = require("../../../../modules/shared/consulta");
const dentista_1 = require("../../../../modules/domain/dentista/dentista");
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
            let consulta = [
                new consulta_1.Consulta(new Date(ano - dia - mes), dentista),
            ];
            const cliente = cliente_1.Cliente.createCliente({
                nome,
                idade,
                CPF,
                CPFresponsavel,
                consulta,
                telefone,
            });
            console.log(cliente);
            res.json({
                dados: cliente,
            });
        }
        catch (e) {
            console.log(`There was an error${e}`);
        }
    }
}
exports.cadastrarCliente = new CadastrarCliente();
