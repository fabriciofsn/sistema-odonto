"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const faker_1 = require("@faker-js/faker");
const dentista_1 = require("./dentista");
const cliente_exception_1 = require("../cliente/cliente.exception");
const dentista_exception_1 = require("./dentista.exception");
let nomeValido;
let CFOvalido;
let cirurgiao;
let nomeInvalido;
let CFOinvalido;
(0, vitest_1.beforeAll)(async () => {
    nomeValido = faker_1.faker.string.alpha({ length: { min: 3, max: 5 } });
    CFOvalido = faker_1.faker.string.numeric({ length: { min: 8, max: 8 } });
    cirurgiao = true;
    nomeInvalido = faker_1.faker.string.alpha({ length: { min: 0, max: 2 } });
    CFOinvalido = faker_1.faker.string.numeric({ length: { min: 0, max: 7 } });
});
(0, vitest_1.describe)("testa o objeto dentista", () => {
    (0, vitest_1.test)("Deve criar objeto dentista", async () => {
        const dentistaValido = {
            nomeDentista: nomeValido,
            CFOID: CFOvalido,
            cirurgiao: cirurgiao,
        };
        (0, vitest_1.expect)(dentista_1.Dentista.createDentista(dentistaValido)).to.be.instanceOf(dentista_1.Dentista);
    });
    (0, vitest_1.test)("Não deve criar objeto dentista com nome inválido", async () => {
        const dentistaNomeInvalido = {
            nomeDentista: nomeInvalido,
            CFOID: CFOvalido,
            cirurgiao: cirurgiao,
        };
        (0, vitest_1.expect)(() => dentista_1.Dentista.createDentista(dentistaNomeInvalido)).toThrowError(cliente_exception_1.ErrorTamanhoMinimoNome);
    });
    (0, vitest_1.test)("Não deve criar objeto dentista com CFO inválido", () => {
        const dentistaCFOInvalido = {
            nomeDentista: nomeValido,
            CFOID: CFOinvalido,
            cirurgiao: cirurgiao,
        };
        (0, vitest_1.expect)(() => dentista_1.Dentista.createDentista(dentistaCFOInvalido)).toThrowError(dentista_exception_1.CFOIDinvalido);
    });
});
//# sourceMappingURL=dentista.spec.js.map