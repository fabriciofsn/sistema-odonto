"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const router_1 = require("../router/router");
const database_connection_1 = require("../../database/database.connection");
class Server {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.databaseConnection();
    }
    middlewares() {
        this.server.use(express_1.default.json());
        this.server.use(body_parser_1.default.json());
        this.server.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.server.use(router_1.router);
    }
    databaseConnection() {
        (async () => {
            try {
                database_connection_1.connection.authenticate().then(() => {
                    console.log("Connected to database");
                });
            }
            catch (e) {
                console.log(`There was an error ${e}`);
            }
        })();
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map