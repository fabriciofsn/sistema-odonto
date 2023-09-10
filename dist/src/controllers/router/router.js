"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const homepage_1 = require("./routers/homepage/homepage");
const cadastrar_cliente_1 = require("./routers/clientes/cadastrar_cliente");
exports.router = (0, express_1.Router)();
exports.router.get("/", homepage_1.homePage.home);
exports.router.post("/cadastrar/cliente", cadastrar_cliente_1.cadastrarCliente.cadastro);
