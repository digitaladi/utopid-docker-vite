import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Axios from "@/baseUrl";
import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";

const GestionPieces = () => {
  const [pieces, setPieces] = useState([]);

  //console.log(Axios);
  useEffect(() => {
    Axios.get("/pieces")
      .then((res) => {
        setPieces(res.data);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
    /*
Axios.get("/my_pieces/").then((response) => {
  console.log(response)
  //setData
})
 */
  }, []);

  return (
    <div className="gestion_layout">
      {pieces &&
        pieces.map((piece) => (
          <div key={piece.id}>
            <h1 className="text-4xl">{piece.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default GestionPieces;
