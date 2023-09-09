"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
    }
    middlewares() {
        this.server.use(express_1.default.json());
        this.server.use(body_parser_1.default.json());
        this.server.use(body_parser_1.default.urlencoded({ extended: true }));
    }
}
exports.Server = Server;
