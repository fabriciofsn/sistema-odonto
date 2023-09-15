"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDTO = void 0;
const consulta_map_1 = require("./consulta.map");
const endereco_map_1 = require("./endereco.map");
class ClienteDTO {
    static clienteDTO(cliente) {
        return {
            nome: cliente.nome,
            idade: cliente.idade,
            CPF: cliente.CPF,
            telefone: cliente.telefone,
            consulta: consulta_map_1.ConsultarDTO.consultaDTO(cliente.consulta),
            endereco: endereco_map_1.EnderecoDTO.enderecoDTO(cliente.enderecos),
        };
    }
}
exports.ClienteDTO = ClienteDTO;
//# sourceMappingURL=cliente.map.js.map