import User from "../models/User.model.js";
import GestionJsonToken from "../services/GestionJsonToken.js";

const AuthController = {
  login: async (req, res) => {
    console.log(req.body);
    //tester si les données existent
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Mauvais email ou mot de passe" });
    }

    // tester si une une utilisateur avec ce email existe
    let user = await User.findOne({
      where: { email: req.body.email }
      
    });

    if (!user) {
      return res.status(401).json({ message: "Ce compte n'existe pas" });
    }

    //tester si le mot de passe rentré correpond à celui de l'utilisateur exisatnt
    let isPasswordValid = await user.checkPasswordSinceUserModel(
      req.body.password
    );
    if (!isPasswordValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: "Mot de passe invalide" });
    }

    //Génération du  token
    const token = GestionJsonToken.createToken(req.body.email, false);
    console.log(token);

    // On exclut le mot de passe du résultat user
    const userData = user.get({ plain: true });
    delete userData.password;

    //création de cookie qui comme clé access_token et connexion définitive avec envoie de données
    res
      .cookie("access_token", token, {
        httpOnly: true, //on ne peut pas acceder au cookie via javascript (contre les attaques XSS)
        secure: false, //mettre à true si c'est HTTPS en production et le mettre  à false pendant la phase de developpement
        sameSite: "strict", //protége contre les attaques CSRF. le cookie ne sera transmis que la requete vient du meme domaine.
        maxAge: 20 * 60 * 60 * 1000, //la durée de vie du cookie à 24 (exprimés en millisecondes)
      })
      .status(200)
      .json({ user: userData, message: "Vous êtes connecté" });
  },
};

export default AuthController;
