import { DataTypes } from "sequelize";

//importer la configuration de la base de données
import db from "./../db.config.js";




const Country = db.define("Country", {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    flag:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    descriptif:{
        type: DataTypes.TEXT,
        allowNull: false,
    },

    typePlante:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    History:{
        type: DataTypes.TEXT,
        allowNull: true,
    }
},

{
    underscored: true, //permet de mettre un undescor sur les champs camelCase ex : isVerified = is_verified
}

)



export default Country;