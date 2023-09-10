"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = void 0;
const cliente_1 = require("../../../../modules/domain/cliente/cliente");
const consulta_1 = require("../../../../modules/shared/consulta");
class CadastrarCliente {
    cadastro(req, res) {
        try {
            let nome = req.body;
            let idade = req.body;
            let CPF = req.body;
            let telefone = req.body;
            let consulta = new consulta_1.Consulta();
            const cliente = cliente_1.Cliente.createCliente({
                nome,
                idade,
                CPF,
                consulta,
                telefone,
            });
        }
        catch (e) {
            console.log(`Ocorreu um erro ${e}`);
        }
    }
}
exports.cadastrarCliente = new CadastrarCliente();
