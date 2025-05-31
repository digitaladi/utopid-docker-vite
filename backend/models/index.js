//importer la configuration de la base de données
import db from "./../db.config.js";

//console.log(db)

//importés les modeles
import User from "./User.model.js";
import Avis from "./Avis.model.js";
import Country from "./Country.model.js";
import Piece from "./Piece.model.js";
import President from "./President.model.js";


/* [[[[[[[[[   DÉFINIR LES RELATIONS ENTRE LES MODELES (TABLES)   ]]]]]]]]] */

//Un pays peut avoir plusieurs piéces de plantes et une plante ne peut appartenir qu'un seul pays
Country.hasMany(Piece, { foreignKey: "countryId", as: "piece" });
Piece.belongsTo(Country, { foreignKey: "countryId", as: "country" });

//Un utilisateur peut avoir plusieurs piéces de ses plantes et une piéce d'une plante ne peut etre possédé qu'a une seul utilisateur
User.hasMany(Piece, { foreignKey: "userId", as: "piece" });
Piece.belongsTo(User, { foreignKey: "userId" , as: "user"});


//une piece peut avoir plusieurs avis et une avis ne peut etre donné qu'a un seul piéce
Piece.hasMany(Avis, { foreignKey: "pieceId" , as: 'avis'});
Avis.belongsTo(Piece, { foreignKey: "pieceId" , as: 'piece'});




//Un utilisateur peut posté  plusieurs avis  et un avis  ne peut appartenir  qu'a une seul utilisateur
User.hasMany(Avis, { foreignKey: "UserId" , as: 'avis'});
Avis.belongsTo(User, { foreignKey: "UserId", as: 'user' });




//un président ne peut diriger qu'ne seul pays et un pays ne peut erte dirigé que par un seul président 
President.hasOne(Country, { 
  foreignKey: 'presidentId', 
  as: 'country' // alias du point de vue du President
});

Country.belongsTo(President, { 
  foreignKey: 'presidentId', 
  as: 'president' // alias du point de vue du Country
});



//exporter le bd + les modeles avec relations

//attention pour importer l'objet en bas et utiliser les variables il faut le mettre dans un variable ex models dans le fichier qui  l'importe :ex : import  models   from "./models/index.js"
export default {
  db, 
  User,
  Piece,
  Avis,
  Country,
};
