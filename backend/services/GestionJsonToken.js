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
        expiresIn: process.env.JWT_DUREE,
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
  verifyToken: async (token) => {
    try {
      const decodecToken = jwt.verify(token, process.env.JWT_SECRET);
      //  console.log(decodecToken);
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
      return res.status(401).json({ message: "token non fourni" });
    }

    //on récupère le token stocké dans le header
    const token = headers["authorization"]?.split(" ")[1];
    //  console.log(token);

    if (!token) {
      return res.status(401).json({ message: "Non connecté" });
    }

    GestionJsonToken.verifyToken(token)
      .then((decodecToken) => {
        req.user = decodecToken;
        console.log("le token vérifié est bon ");
        next();
      })
      .catch((error) => {
        res.status(401).json({ message: "token invalide", error: error });
      });

    /*
    //vérification du token
    if (!GestionJsonToken.verifyToken(token)) {
      res.status(401).json({ message: "token invalide" });
    } else {
      console.log("le token vérifié est bon ");
      next();
    }
*/
  },

  verifyAccessTokenAdmin: (req, res, next) => {
    const headers = req.headers;

    //teste si un token a été fourni
    if (!headers["authorization"]) {
      return res.status(401).json({ message: "token non fourni" });
    }

    //on récupère le token stocké dans le header
    const token = headers["authorization"]?.split(" ")[1];
    //  console.log(token);

    if (!token) {
      return res.status(401).json({ message: "Non connecté" });
    }

    GestionJsonToken.verifyToken(token)
      .then((decodedToken) => {
        if (decodedToken.data.role === "ROLE_ADMIN") {
          req.user = decodedToken;
          console.log("Vous avez les bons droits admin");
          next();
        } else {
          console.log("Vous n'avez  pas les bons droits admin");
          console.log(decodedToken);
          return res
            .status(403)
            .json({ message: "Vous n'avez pas les bons droits" });
        }
      })
      .catch((error) => {
        res.status(401).json({ message: "token invalide", error: error });
      });

    /*
    //vérification du token
    if (!GestionJsonToken.verifyToken(token)) {
      res.status(401).json({ message: "token invalide" });
    } else {
      console.log("le token vérifié est bon ");
      next();
    }
*/
  },

  grantNewAccessToken: (req, res) => {
    //on récupère lr tokrn stocké dans ke cookie
    const token = cookieParser("refresh_token", req.headers.cookie);
    let decoded = this.verify(token);

    //on teste si le token est valide
    if (!decoded) {
      return res.status(405).json({ message: "token invalide" });
    } else {
      //sinon on crée un nouveau token
      //{email : user.email, id:user.id, role: user.role }
      let newtoken = this.createToken(
        { email: decoded.email, id: decoded.id, role: decoded.role },
        false
      );
      res.send({ access_token: newtoken.accessToken });
    }
  },
};

export default GestionJsonToken;
