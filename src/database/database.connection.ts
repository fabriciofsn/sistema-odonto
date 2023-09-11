import { Sequelize } from "sequelize";

export const connection: Sequelize = new Sequelize(
  "odonto",
  "postgres",
  "xtm440",
  {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
  }
);
