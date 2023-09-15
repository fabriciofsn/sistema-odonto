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
            endereco: cliente.enderecos.map((dados) => {
                return {
                    Estado: dados.estado,
                    Cidade: dados.cidade,
                    Cep: dados.cep,
                    Bairro: dados.bairro,
                    Rua: dados.rua,
                    numero: dados.numero,
                };
            }),
            consulta: cliente.consulta.map((dados) => {
                return {
                    data: dados.data,
                    dentista: {
                        nome: dados.dentista.nomeDentista,
                        CFOID: dados.dentista.CFOID,
                        cirurgiao: dados.dentista.cirurgiao,
                    },
                };
            }),
        };
    }
}
exports.ClienteDTO = ClienteDTO;
//# sourceMappingURL=cliente.map.js.map