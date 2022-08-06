import { Sequelize } from "sequelize-typescript";
import { Country } from "~/databases/models/country";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Country],
});

export { sequelize };