import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
//console.log(process.env.VITE_DB_USER);

const sequelize = new Sequelize(
  process.env.VITE_DB_DATABASE,
  process.env.VITE_DB_USER,
  process.env.VITE_DB_PASSWORD,
  {
    //port: 3306,
  // host: 'mysql_db', // if docker 
    host : "localhost",
    dialect: "mysql",
    dialectModule: mysql2,

    logging: false,
  }
);

const db = {};

db.sequelize = sequelize;

db.sequelize
  .sync({ alter: true })

  .then(() => {
    console.log("LA BASE DE DONNÉES A ÉTÉ INITIALISÉE");
  });

export default db;
