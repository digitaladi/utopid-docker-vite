import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PresidentService from "@services/president.service";
const ShowPresident = () => {
  const [president, setPresident] = useState({});
  const { id } = useParams();

  useEffect(() => {
    PresidentService.getOnePresidentAdmin(id)
      .then((response) => {
        console.log(response.data.data);
        setPresident(response.data.data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="flex flex-row  px-[10%] py-[2%] h-max gap-5">
      <div className="flex-col flex w-2/6 bg-[#894b00] text-[#fefce8] justify-start items-center">
        <div>
          <img
            class=""
            src={`http://localhost:4000/uploads/presidents/${president.image}`}
            alt="image description"
          />
        </div>
        <div></div>
      </div>
      <div className="flex-col flex w-4/6 bg-[#fefce8] p-8 justify-between">
        <div className="flex flex-col">
          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#894b00]"> Le nom :</span>{" "}
            {president.name}{" "}
          </div>
          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#894b00]"> Le pseudo : </span>{" "}
            {president.pseudo}{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px]  pb-3 font-bold text-[#894b00] not-[]:">
            Descriptif
          </div>
          <div>{president.descriptif}</div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="text-[#894b00] font-bold mr-2">Crée </div>
          <div>
            {" "}
            {new Date(president.createdAt).toLocaleDateString() || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPresident;
