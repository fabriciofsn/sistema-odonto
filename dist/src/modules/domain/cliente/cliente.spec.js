"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const consulta_1 = require("../../shared/consulta");
const faker_1 = require("@faker-js/faker");
const dentista_1 = require("../dentista/dentista");
const cliente_1 = require("./cliente");
const cliente_exception_1 = require("./cliente.exception");
let nomeValido;
let idadeValida;
let CPFvalido;
let CPFresponsavelValido;
let consultaValida;
let telefoneValido;
let nomeInvalido;
let idadeInvalida;
let CPFinvalido;
let CPFresponsavelInvalido;
let telefoneInvalido;
(0, vitest_1.beforeAll)(async () => {
    nomeValido = faker_1.faker.string.alpha({ length: { min: 3, max: 5 } });
    nomeInvalido = faker_1.faker.string.alpha({ length: { min: 0, max: 1 } });
    idadeValida = faker_1.faker.number.int({ min: 5, max: 70 });
    idadeInvalida = faker_1.faker.number.int({ min: 0, max: 0 });
    CPFvalido = faker_1.faker.string.numeric({ length: { min: 11, max: 11 } });
    CPFinvalido = faker_1.faker.string.numeric({ length: { min: 0, max: 10 } });
    CPFresponsavelValido = faker_1.faker.string.numeric({ length: { min: 11, max: 11 } });
    CPFresponsavelInvalido = faker_1.faker.string.numeric({ length: { min: 1, max: 5 } });
    telefoneValido = faker_1.faker.string.alpha({ length: { min: 11, max: 11 } });
    telefoneInvalido = faker_1.faker.string.alpha({ length: { min: 0, max: 5 } });
    let dentista = dentista_1.Dentista.createDentista({
        nome: "jean",
        CFOID: "123456/78",
        cirurgiao: true,
    });
    let consulta1 = new consulta_1.Consulta(new Date(), new Date(), dentista);
    let consulta2 = new consulta_1.Consulta(new Date(), new Date(), dentista);
    let consulta3 = new consulta_1.Consulta(new Date(), new Date(), dentista);
    consultaValida = faker_1.faker.helpers.arrayElements([consulta1, consulta2, consulta3], {
        min: 1,
        max: 3,
    });
});
(0, vitest_1.describe)("test objeto cliente", () => {
    (0, vitest_1.test)("Cria objeto dentista valido", async () => {
        const clienteValido = {
            nome: nomeValido,
            idade: idadeValida,
            CPF: CPFvalido,
            CPFresponsavel: CPFresponsavelValido,
            consulta: consultaValida,
            telefone: telefoneValido,
        };
        (0, vitest_1.expect)(cliente_1.Cliente.createCliente(clienteValido)).to.be.instanceOf(cliente_1.Cliente);
    });
    (0, vitest_1.test)("não deve criar objeto cliente com nome inválido", async () => {
        const clienteInvalido = {
            nome: nomeInvalido,
            idade: idadeValida,
            CPF: CPFvalido,
            CPFresponsavel: CPFresponsavelValido,
            consulta: consultaValida,
            telefone: telefoneValido,
        };
        (0, vitest_1.expect)(() => cliente_1.Cliente.createCliente(clienteInvalido)).toThrowError(cliente_exception_1.ErrorTamanhoMinimoNome);
    });
    (0, vitest_1.test)("Não deve criar objeto cliente com idade menor que zero", async () => {
        const clienteIdadeInvalida = {
            nome: nomeValido,
            idade: idadeInvalida,
            CPF: CPFvalido,
            CPFresponsavel: CPFresponsavelValido,
            consulta: consultaValida,
            telefone: telefoneValido,
        };
        (0, vitest_1.expect)(() => cliente_1.Cliente.createCliente(clienteIdadeInvalida)).toThrowError(cliente_exception_1.ErrorIdadeInvalida);
    });
    (0, vitest_1.test)("não deve criar objeto cliente com CPF inválido", async () => {
        const clienteCPFInvalido = {
            nome: nomeValido,
            idade: idadeValida,
            CPF: CPFinvalido,
            CPFresponsavel: CPFresponsavelValido,
            consulta: consultaValida,
            telefone: telefoneValido,
        };
        (0, vitest_1.expect)(() => cliente_1.Cliente.createCliente(clienteCPFInvalido)).toThrowError(cliente_exception_1.ErrorCPFinvalido);
    });
    (0, vitest_1.test)("Não deve criar objeto cliente com CPF do responsavel invalido", async () => {
        const clienteCPFresponsavelInvalido = {
            nome: nomeValido,
            idade: idadeValida,
            CPF: CPFvalido,
            CPFresponsavel: CPFresponsavelInvalido,
            consulta: consultaValida,
            telefone: telefoneValido,
        };
        (0, vitest_1.expect)(() => cliente_1.Cliente.createCliente(clienteCPFresponsavelInvalido)).toThrowError(cliente_exception_1.ErrorCPFinvalido);
    });
    (0, vitest_1.test)("não deve criar objeto cliente com telefone inválido", () => {
        const clienteTelefoneInvalido = {
            nome: nomeValido,
            idade: idadeValida,
            CPF: CPFvalido,
            CPFresponsavel: CPFresponsavelValido,
            consulta: consultaValida,
            telefone: telefoneInvalido,
        };
        (0, vitest_1.expect)(() => cliente_1.Cliente.createCliente(clienteTelefoneInvalido)).toThrowError(cliente_exception_1.ErrorTelefoneInvalido);
    });
});
