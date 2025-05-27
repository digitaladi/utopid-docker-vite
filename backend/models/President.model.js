import { DataTypes } from "sequelize";

//importer la configuration de la base de données
import db from "./../db.config.js";




const President = db.define('President', {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  descriptif: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},

{
    //timestamps: true, //permet d'ajouter updateAt, createdAt automatiquement
    underscored : true //permet de mettre un undescor sur les champs camelCase ex : isVerified = is_verified
    }

);

export default President;
