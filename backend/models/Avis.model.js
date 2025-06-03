import { DataTypes } from "sequelize";

//importer la configuration de la base de données
import db from "./../db.config.js";

const Avis = db.define(
  "avis",
  {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reported: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: false,
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    timestamps: true, //permet d'ajouter updateAt, createdAt automatiquement
    //underscored: true, //permet de mettre un undescor sur les champs camelCase ex : isVerified = is_verified
  }
);

export default Avis;
