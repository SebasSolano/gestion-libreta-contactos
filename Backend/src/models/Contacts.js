import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Contacts = sequelize(
  "contacts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    alias: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    cellPhone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    webSite: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamp: true,
  }
);
