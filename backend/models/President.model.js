import { DataTypes } from "sequelize";

//importer la configuration de la base de données
import db from "./../db.config.js";




const President = db.define('President', {

name: {
    type: DataTypes.STRING,
    allowNull: false,

},
name_scientist:{
    type: DataTypes.STRING,
    allowNull: false,
},
image:{
    type: DataTypes.STRING,
    allowNull: false,
},

descriptif:{
    type: DataTypes.TEXT,
    allowNull: true,
}
})


export default President;