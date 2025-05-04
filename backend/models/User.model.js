import { DataTypes } from "sequelize";

//importer la configuration de la base de données
import db from "./../db.config.js";



//definir le modele (de table user) avec sequelize

const User = db.define(
  "User",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: true, //champ n'est pas requis
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true, //champ n'est pas requis
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false, //champ est  requis
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false, //champ est  requis
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false, //champ est  requis
      defaultValue: true,
    },
    rgpd: {
      type: DataTypes.BOOLEAN,
      allowNull: false, //champ est  requis
    },
    //Si l'utilisateur a bien valider son email lors de son inscription
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false, //champ est  requis
      defaultValue: false,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: false, //champ est  requis
      defaultValue: "avatar-default",
    },

    lastConnexion: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      //permet de restreindre les valeurs possible du champ role pour dire seuls les valeurs spécifiées dans le tableau "isIn sont accéptés lors de l'insertion ou la mise à jour d'un enregsitrement"
      validate: {
        isIn: [["user", "moderator", "admin", "superAdmin"]],
      },
    },
  }, //on sort de l'objet qui definit les colonnes

  {
    timestamps: true, //permet d'ajouter updateAt, createdAt automatiquement
    underscored: true, //permet de mettre un undescor sur les champs camelCase ex : isVerified = is_verified
  }
);

export default User;
