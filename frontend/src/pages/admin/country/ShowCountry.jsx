import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PresidentService from "@services/president.service";
import countryService from "@services/country.service";
const ShowCountry = () => {
  const [country, setCountry] = useState({});
  const { id } = useParams();

  useEffect(() => {
    countryService
      .getOneCountryAdmin(id)
      .then((response) => {
        console.log(response.data.data);
        setCountry(response.data.data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="flex flex-row  px-[10%] py-[2%] h-max gap-5">
      <div className="flex-col flex w-2/6  text-[#fefce8] justify-start items-center">
        <div>
          <img
            class=""
            src={`http://localhost:4000/uploads/flags/${country.flag}`}
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
              Le nom du pays:
            </span>{" "}
            {country.name}{" "}
          </div>

          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#8200db]">
              {" "}
              Le président :
            </span>{" "}
            {country.president && country.president.name}
          </div>

          <div className="text-[20px]  pb-3">
            {" "}
            <span className="font-bold text-[#8200db]">
              {" "}
              Le type de plante :{" "}
            </span>{" "}
            {country.typePlante}{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px]  pb-3 font-bold text-[#8200db] not-[]:">
            Descriptif
          </div>
          <div>{country.descriptif}</div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="text-[#8200db] font-bold mr-2">Crée </div>
          <div>
            {" "}
            {new Date(country.createdAt).toLocaleDateString() || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCountry;
