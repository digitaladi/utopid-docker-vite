import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PresidentService from "@services/president.service";
import avisService from "@services/avis.service";
const ShowAvis = () => {
  const [avis, setAvis] = useState({});
  const { id } = useParams();

  useEffect(() => {
    avisService
      .getOneAvisAdmin(id)
      .then((response) => {
        console.log(response.data.data);
        setAvis(response.data.data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="flex flex-row  px-[10%] py-[2%] h-max gap-5">
      <div className="flex-col flex w-2/6 bg-[#894b00] text-[#fefce8] justify-start items-center  p-6 ">
        {avis.user && (
          <div className="flex flex-row">  <span>L'auteur de l'avis</span> : {avis.user.username || "N/A"}</div>
        )}

        {avis.piece && (
          <div className="flex flex-row"><span>Piéce de l'avis</span> :  {avis.piece.name || "N/A"}</div>
        )}
      </div>

      <div className="flex-col flex w-4/6 bg-[#fefce8] p-8 justify-between">
        <div className="flex flex-col"> 
          <div className="text-[20px]  pb-3 font-bold text-[#894b00] not-[]:">
            Avis
          </div>
          <div> {avis.comment}</div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="text-[#894b00] font-bold mr-2">Crée </div>
          <div> {new Date(avis.createdAt).toLocaleDateString() || "N/A"}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowAvis;
