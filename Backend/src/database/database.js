import Sequelize from "sequelize";

// Puerto de la base de datos: 5432

export const sequelize = new Sequelize(
  "libreta_contactos",
  "postgres",
  "12345678",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
