"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
require("dotenv").config();
exports.connection = new sequelize_1.Sequelize("odonto", "postgres", process.env.SENHA, {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
});
//# sourceMappingURL=database.connection.js.map