import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pieceService from "@services/piece.service";

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
        <div className="flex-col flex w-2/6  text-[#ecfdf5] justify-start items-center">
          <div>
            <img
              class=""
              src={`http://localhost:4000/uploads/pieces/${piece.image}`}
              alt="Drapeau du pays"
            />
          </div>
        </div>
        <div className="flex-col flex w-4/6 bg-[#ecfdf5] p-8 justify-between">
          <div className="flex flex-col">
            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#00598a]"> Le nom :</span>{" "}
              {piece.name}{" "}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#00598a]">
                {" "}
                Le pseudo :
              </span>{" "}
              {piece.name_scientist || "N/A"}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#00598a]">
                {" "}
                Numéro de piéce :
              </span>{" "}
              {piece.piece_number || "N/A"}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#00598a]">
                {" "}
                Le royaume :{" "}
              </span>{" "}
              {piece.country && piece.country.name}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#00598a]">
                {" "}
                La taille :{" "}
              </span>{" "}
              {piece.size}
            </div>

            <div className="text-[20px]  pb-3">
              {" "}
              <span className="font-bold text-[#00598a]">
                Le propriétaire :{" "}
              </span>
              {piece.user && piece.user.username}
            </div>
          </div>

          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#00598a]">
              Date d'obtention :{" "}
            </span>
            {new Date(piece.procurement_at).toLocaleDateString() || "N/A"}
          </div>

          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#00598a]">
              Type d'obtention :{" "}
            </span>
            {piece.type_procurement || "N/A"}
          </div>

          <div className="text-[20px]  pb-3 flex flex-row gap-3">
            {" "}
            <span className="font-bold text-[#00598a]">
              Drapeau du royaume :
            </span>
            <div>
              {piece.country && (
                <img
                  class=" w-[20px] h-[20px]"
                  src={`http://localhost:4000/uploads/flags/${piece.country.flag}`}
                  alt="Drapeau du pays"
                />
              )}
            </div>
          </div>

          <div className="flex flex-row justify-end">
            <div className="text-[#00598a] font-bold mr-2">Crée </div>
            <div>{new Date(piece.createdAt).toLocaleDateString() || "N/A"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPiece;
