import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pieceService from "@services/piece.service";
import countryService from "@services/country.service";

const ShowPiece = () => {
  const [piece, setPiece] = useState({});
  const { id } = useParams();

  useEffect(() => {
    pieceService
      .getOnePieceAdmin(id)
      .then((response) => {
        console.log(response.data.data);
        setPiece(response.data.data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row  px-[10%] py-[2%] h-max gap-5">
        <div className="flex-col flex w-2/6  text-[#fefce8] justify-start items-center">
          <div>
            <img
              class=""
              src={`http://localhost:4000/uploads/pieces/${piece.image}`}
              alt="Drapeau du pays"
            />
          </div>
        </div>
        <div className="flex-col flex w-4/6 bg-[#f5f3ff] p-8 justify-between">
          <div className="flex flex-col">
            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#8200db]">
                {" "}
                Le nom du pièce :
              </span>{" "}
              {piece.name}{" "}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#8200db]"> Le pays : </span>{" "}
              {piece.country && piece.country.name}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#8200db]">
                Le propriétaire de la plante : </span>
               {piece.user && piece.user.username}
            </div>
          </div>

          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#8200db]">
              Date d'obtention :{" "}
            </span>
            {new Date(piece.procurement_at).toLocaleDateString() || "N/A"}
          </div>

          <div className="flex flex-row justify-end">
            <div className="text-[#8200db] font-bold mr-2">Crée </div>
            <div>{new Date(piece.createdAt).toLocaleDateString() || "N/A"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPiece;
