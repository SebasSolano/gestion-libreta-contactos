import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Users = sequelize(
  "users",
  {
    id: {

    },
    username: {

    },
    email: {

    },
    password: {
        
    },
  },
  {
    timestamp: true,
  }
);
