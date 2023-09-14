import sequelize from "sequelize";
import { connection } from "./database.connection";

export const DentistaModel = connection.define("dentista", {
  nome: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  CFOID: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  cirurgiao: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
});
