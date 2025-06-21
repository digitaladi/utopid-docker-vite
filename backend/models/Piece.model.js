import { DataTypes } from "sequelize";

//importer la configuration de la base de données
import db from "./../db.config.js";
import { format } from "mysql2";

//definir le modele (de table user) avec sequelize

const Piece = db.define(
  "Piece",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_scientist: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    size: {
      type: DataTypes.INTEGER,
      allowNull: false, //champ est  requis
    },

    piece_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false, //champ est  requis
    },
    //Si l'utilisateur a bien valider son email lors de son inscription
    isValid: {
      type: DataTypes.BOOLEAN,
      allowNull: false, //champ est  requis
      defaultValue: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false, //champ est  requis
      // defaultValue: 'avatar-default'
    },

    format: {
      type: DataTypes.INTEGER,
      allowNull: false, //champ est  requis
      defaultValue: 1,
    },

    e_fake_signature: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    anecdote: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    procurement_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    type_procurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    isPrint: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, //on sort de l'objet qui definit les colonnes

  {
    timestamps: true, //permet d'ajouter updateAt, createdAt automatiquement
    underscored: true, //permet de mettre un undescor sur les champs camelCase ex : isVerified = is_verified
  }
);

export default Piece;
