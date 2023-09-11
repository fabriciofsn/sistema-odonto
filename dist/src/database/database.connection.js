"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
exports.connection = new sequelize_1.Sequelize("odonto", "postgres", "xtm440", {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
});
//# sourceMappingURL=database.connection.js.map