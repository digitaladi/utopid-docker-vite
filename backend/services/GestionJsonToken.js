import jwt from "jsonwebtoken";
import cookieParser from "../helpers/cookieParser.js";
const GestionJsonToken = {
  createToken: (payload, refresh = false) => {
    //signature du token avec le payload email de lutilisateur
    const accessToken = jwt.sign(
      {
        data: payload,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '24h',
      }
    );

    return {
      //retourne un token généré
      access_token: accessToken,

      //retourne  un token signé  si on rafraichi
      refresh_token: refresh
        ? jwt.sign(
            {
              data: payload,
            },
            process.env.JWT.SECRET
          )
        : null,
    };
  },

  //verifie si le token est valide
  verifyToken: (token) => {
    try {
      const decodecToken = jwt.verify(token, process.env.JWT_SECRET);
      return decodecToken;
    } catch (e) {
      console.log("ce jeton n'est pas bon" + e);
      return false;
    }
  },

  //vérifie si la route qui utilise le token est accessible
  verifyAccessToken: (req, res, next) => {
    const headers = req.headers;

    //teste si un token a été fourni
    if (!headers["authorization"]) {
      res.status(405).json({ message: "token non fourni" });
    }

    //on récupère le token stocké dans le header
    const token = headers["authorization"]?.split(" ")[1];
    console.log(token);

    //vérification du token
    if (!this.verifyToken(token)) {
      res.status(405).json({ message: "token invalide" });
    } else {
      console.log("le token vérifié est bon ");
      next();
    }
  },

  grantNewAccessToken: (req, res) => {
    //on récupère lr tokrn stocké dans ke cookie
    const token = cookieParser("refresh_token", req.headers.cookie);
    let decoded = this.verify(token);

    //on teste si le token est valide
    if (!decoded) {
      res.status(405).json({ message: "token invalide" });
    } else {
      //sinon on crée un nouveau token
      let newtoken = this.createToken({ email: decoded.email }, false);
      res.send({ access_token: newtoken.accessToken });
    }
  },
};

export default GestionJsonToken;

