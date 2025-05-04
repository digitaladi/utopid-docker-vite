import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
//console.log(process.env.VITE_DB_USER);

//configuration de base de données
const db = new Sequelize(
  process.env.VITE_DB_DATABASE,
  process.env.VITE_DB_USER,
  process.env.VITE_DB_PASSWORD,
  {
    //port: 3306,
    // host: 'mysql_db', // if docker 
    host : "localhost",
    dialect: "mysql",
    dialectModule: mysql2,

    logging: false, //eviter d'afficher ls requetes dans la console log
  }
);



//const db = {};

//db.sequelize = sequelize;


//connexion avec la base de données
await db.authenticate()
.then(() => console.log('🔗 La connexion à mysql a été établie'))
.catch((error) => console.log(`Impossible de se connecter à la bdd utopid : ${error}`))







  
export default db;

