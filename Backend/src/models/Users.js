import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Contacts } from "./Contacts.js";

export const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamp: true,
  }
);

Users.hasMany(Contacts, {
  foreignKey: "userId",
  targetId: "id",
});

Contacts.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
})
