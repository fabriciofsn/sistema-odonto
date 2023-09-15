"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentistaModel = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const database_connection_1 = require("./database.connection");
exports.DentistaModel = database_connection_1.connection.define("dentista", {
    nome: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    CFOID: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    cirurgiao: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: false,
    },
});
//# sourceMappingURL=model.dentista.js.map