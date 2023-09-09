import { describe, test, beforeAll, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { createDentistaProps } from "./iDentista";
import { Dentista } from "./dentista";

let nomeValido: string;
let CFOvalido: string;
let cirurgiao: boolean;

beforeAll(async () => {
  nomeValido = faker.string.alpha({ length: { min: 3, max: 5 } });
  CFOvalido = faker.string.numeric({ length: { min: 8, max: 8 } });
  cirurgiao: true;
});

describe("testa o objeto desntista", () => {
  test("Deve criar objeto dentista", async () => {
    const dentistaValido: createDentistaProps = {
      nome: nomeValido,
      CFOID: CFOvalido,
      cirurgiao: cirurgiao,
    };
    expect(Dentista.createDentista(dentistaValido)).to.be.instanceOf(Dentista);
  });
});
