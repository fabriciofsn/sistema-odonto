import { Sequelize } from "sequelize";
require("dotenv").config();

export const connection: Sequelize = new Sequelize(
  "odonto",
  "postgres",
  process.env.SENHA,
  {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
  }
);
