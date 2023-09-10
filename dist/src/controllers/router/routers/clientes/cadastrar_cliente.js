"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = void 0;
class CadastrarCliente {
    cadastro(req, res) {
        try {
            let { nome, idade, CPF, CPFresponsavel, telefone } = req.body;
            console.log(nome);
        }
        catch (e) {
            console.log(`There was an error${e}`);
        }
    }
}
exports.cadastrarCliente = new CadastrarCliente();
