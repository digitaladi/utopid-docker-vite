import Country from "../models/Country.model.js";
import President from "../models/President.model.js";
import fs from "fs";
const CountryController = {
  //coté admin

  addCountryAdmin: async (req, res) => {
    console.log(req.body);
    req.body = { ...req.body, flag: req.file ? req.file.filename : null };

    const { name, type_plante, flag, presidentId } = req.body;

    //on retorune une erreur si ces variables sont manquantes

    if ((!name, !type_plante, !flag, !presidentId)) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }

    //création de l'utilisateur
    Country.create(req.body)
      .then((country) => {
        return res.json({ message: `Pays crée`, data: country });
      })

      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err });
      });
  },

  getCountriesAdmin: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Page actuelle (défaut: 1)
      const limit = parseInt(req.query.limit) || 5; // Nombre d'éléments par page (défaut: 10)
      const offset = (page - 1) * limit;

      /*
           const { count, rows } = await Country.findAll({
      include: [{ model: President, as: 'president' }],
              limit,
        offset,
        order: [["id", "ASC"]],
    });

*/
      //requete qui récupère tous les utilisateurs par n limit en commencant par n offset par ordre croissant

      const { count, rows } = await Country.findAndCountAll({
        include: [{ model: President, as: "president" }],
        limit,
        offset,
        order: [["id", "ASC"]],
      });

      res.json({
        countries: rows, //la listes des pays
        totalItems: count, // nombre d'utilisateurs
        totalPages: Math.ceil(count / limit), //nombres totales des pays / le nombre de pages par page : nombres de pages
        currentPage: page, //la page courante
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  editCountryAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let countryId = parseInt(req.params.id);

    //on réfinit avatar le nom du fichier choisi ou on le met null
    req.body = { ...req.body, flag: req.file ? req.file.filename : null };

    console.log(req.body);
    //vérifier si la paremetre id existe
    if (!countryId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //vérifier si ce président existe
    Country.findOne({ where: { id: countryId }, raw: true })
      .then((country) => {
        if (country === null) {
          return res.status(404).json({ message: "Ce pays n'existe pas !" });
        }

        /*
        if (req.body.avatar && typeof req.body.avatar !== "string") {
          req.body.avatar = req.body.avatar.name; // or convert to string if possible
        }
*/
        //mise à jour de le pays

        console.log(country);
        Country.update(req.body, { where: { id: countryId } })
          .then((country) =>
            res.json({
              data: country,
              message: `Le pays  a été mise à jour ! `,
            })
          )
          .catch((err) =>
            res
              .status(500)
              .json({ message: "Erreur de base de données", error: err })
          );
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },

  deleteCountryAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let countrytId = parseInt(req.params.id);

    if (!countrytId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //pour récupérer l'image uploader et le supprimer
    let country = await Country.findOne({
      where: { id: countrytId },
      raw: true,
    });
    let pathfile = "./public/uploads/countries/" + country.flag;

    Country.destroy({ where: { id: countrytId }, force: true })
      .then(() => {
        //si le chemin existe on supprime le fichier lié à cet utilisateur
        try {
          if (fs.existsSync(pathfile)) {
            fs.unlinkSync(pathfile);
            console.log("Fichier supprimé");
          } else {
            console.log("Le fichier n'existe pas, suppression ignorée");
          }
        } catch (err) {
          console.error("Erreur lors de la suppression:", err);
        }

        res.status(200).json({ message: "pays supprimé" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },

  getOneCountryAdmin: async (req, res) => {
    let countryId = parseInt(req.params.id);

    if (!countryId) {
      return res.json(400).json({ message: "Ce parametre n'existe pas" });
    }

    Country.findOne({
      where: {
        // your conditions here, for example:
        id: countryId,
        //raw: true,
      },

      include: [
        {
          model: President,
          as: "president", // or whatever you named the association
        },
      ],
    })

      .then((country) => {
        if (country === null) {
          return res.status(404).json({ message: "Ce pays n'existe pas ! " });
        }

        return res.json({ data: country });
      })

      .catch((err) => {
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err });
      });
  },

  /* [[[[[[[[[PROFILE]]]]]]]] */

  getCountries: async (req, res) => {
    try {
      /*
           const { count, rows } = await Country.findAll({
      include: [{ model: President, as: 'president' }],
              limit,
        offset,
        order: [["id", "ASC"]],
    });

*/
      //requete qui récupère tous les utilisateurs par n limit en commencant par n offset par ordre croissant

      const { count, rows } = await Country.findAndCountAll({
        include: [{ model: President, as: "president" }],
        order: [["id", "ASC"]],
      });

      res.json({
        countries: rows, //la listes des pays
        totalItems: count, // nombre de pays
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
};

export default CountryController;
