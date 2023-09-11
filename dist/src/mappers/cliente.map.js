"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDTO = void 0;
class ClienteDTO {
    static clienteDTO(cliente) {
        return {
            nome: cliente.nome,
            idade: cliente.idade,
            CPF: cliente.CPF,
            telefone: cliente.telefone,
            consulta: cliente.consulta,
        };
    }
}
exports.ClienteDTO = ClienteDTO;
//# sourceMappingURL=cliente.map.js.map