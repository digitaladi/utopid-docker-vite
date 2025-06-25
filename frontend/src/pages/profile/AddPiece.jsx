import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DrawIcon from "@mui/icons-material/Draw";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import LanguageIcon from "@mui/icons-material/Language";

import countryService from "@services/country.service";
const AddPiece = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    countryService.getCountries().then((response) => {
      console.log(response.data.countries);
      setCountries(response.data.countries);
    });
  }, []);

  return (
    <>
      <div className="w-2/6   pr-4 h-[620px] border-stone-200">
        <div className="flex flex-row w-auto text-dark-utopid  justify-between bg-light-utopid p-4 mb-2">
          <div className="flex flex-row gap-3">
            <p> Choisir la langue : </p>
            <div className="cursor-pointer hover:text-intermediaire-utopid">
              <LanguageIcon />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <p> Reinitialiser : </p>
            <div className="cursor-pointer hover:text-intermediaire-utopid">
              <RestartAltIcon />
            </div>
          </div>
        </div>

        <form class="max-w-md  h-[620px] pl-2  pr-8  mx-auto overflow-y-auto custom-scrollbar">
          <div class="relative z-0 w-full mb-15 group mt-10">
            <label
              for="countryId"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-whit"
            >
              Quel type est votre plante ?
            </label>
            <select
              placeholder="Sélectionner un pays"
              id="countryId"
              class="block w-full p-2 mb-6 text-sm  text-gray-900 border-b border-b-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""> </option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.typePlante}
                </option>
              ))}
            </select>
          </div>

          <div class="relative z-0 w-full mb-15 group">
            <input
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#006045]  focus:outline-none focus:ring-0 focus:border-[#006045] peer"
              placeholder=" "
            />

            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#006045] peer-focus:dark:text-[#006045] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nom de la plante
            </label>
          </div>

          <div class="relative z-0 w-full mb-15 group">
            <input
              type="text"
              name="name_scientist"
              id="name_scientist"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#006045]  focus:outline-none focus:ring-0 focus:border-[#006045] peer"
              placeholder=" "
            />

            <label
              for="name_scientist"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#006045] peer-focus:dark:text-[#006045] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pseudo de la plante
            </label>
          </div>

          <div class="relative z-0 w-full mb-15 group">
            <div
              for="countryId"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-whit"
            >
              Dans votre pièce voulez vous afficher :
            </div>

            <div class="flex gap-10">
              <div class="inline-flex items-center">
                <label
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                  for="on"
                  data-ripple-dark="true"
                >
                  <input
                    name="ripple"
                    type="radio"
                    class="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                    id="on"
                  />
                  <span class="absolute bg-dark-utopid w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label class="text-slate-600 cursor-pointer text-sm" for="on">
                  Nom d'utilisateur
                </label>
              </div>
              <div class="inline-flex items-center">
                <label
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                  for="off"
                >
                  <input
                    name="ripple"
                    type="radio"
                    class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                    id="off"
                  />
                  <span class="absolute bg-dark-utopid w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label class="text-slate-600 cursor-pointer text-sm" for="off">
                  Nom/prenom
                </label>
              </div>
            </div>
          </div>

          <div class="relative z-0 w-full mb-15 group mt-10">
            <label
              for="type_procurement"
              class="block mb-2 text-sm font-medium text-dark-utopid dark:text-whit"
            >
              Comment vous avez obtenu cette plante ?
            </label>
            <select
              placeholder="Sélectionner un pays"
              id="type_procurement"
              class="block w-full p-2 mb-6 text-sm  text-dark-utopid border-b border-b-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""></option>
              <option value="achat">Par achat</option>
              <option value="semence">Par semence</option>
              <option value="plante">Par plantation</option>
            </select>
          </div>

          <div class="relative z-0 w-full mb-15 group">
            <input
              type="date"
              name="procurement_at"
              id="procurement_at"
              class="block py-2.5 px-0 w-full text-sm text-dark-utopid bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#006045]  focus:outline-none focus:ring-0 focus:border-[#006045] peer"
              placeholder=" "
            />

            <label
              for="procurement_at"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#006045] peer-focus:dark:text-[#006045] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date d'obtention de la plante
            </label>
          </div>

          <div class="relative z-0 w-full mb-15 group">
            <input
              type="number"
              name="size"
              id="size"
              class="block py-2.5 px-0 w-full text-sm text-dark-utopid bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#006045] focus:outline-none focus:ring-0 focus:border-[#006045] peer"
              placeholder=" "
            />

            <label
              for="size"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006045] peer-focus:dark:text-[#006045] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Taille de la plante (en cm)
            </label>
          </div>

          <div class="relative z-0 w-full mb-15 group">
            <div class="space-y-8 max-w-md mx-auto">
              <label class="text-base text-slate-500 font-medium mb-3 block">
                Photo de la plante
              </label>

              <input
                type="file"
                name="image"
                class="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-dark-utopid file:hover:bg-gray-700 file:text-white"
              />
            </div>
          </div>

          {/* 
          <div class="relative z-0 w-full mb-15 group">
            <input
              type="text"
              name="e_fake_signature"
              id="e_fake_signature"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid  focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
              placeholder=" "
            />

            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Signature de la plante
            </label>
          </div>
*/}
          <div className="flex flex-row justify-end mt-10">
            <button
              type="submit"
              class="border-1 cursor-pointer border-dark-utopid text-[#ecfdf5] bg-dark-utopid hover:text-dark-utopid hover:bg-[#ecfdf5]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
      <div className="w-4/6">
        <div className="flex flex-row w-auto text-dark-utopid justify-between bg-light-utopid p-4 mb-2">
          <div className="flex flex-row gap-3">
            {" "}
            <p>type de signature : </p>
            <div className="cursor-pointer hover:text-intermediaire-utopid">
              <DrawIcon />
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <p>taille : </p>
            <div className="cursor-pointer hover:text-intermediaire-utopid">
              <PhotoSizeSelectLargeIcon />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <p>Recto verso : </p>
            <div className="cursor-pointer hover:text-intermediaire-utopid">
              <SwapHorizontalCircleIcon />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <p>Aperçu : </p>
            <div className="cursor-pointer hover:text-intermediaire-utopid">
              <VisibilityIcon />
            </div>
          </div>
        </div>
        <div className="bg-[url('./images/file.svg')] h-[640px] bg-stone-100"></div>
      </div>
    </>
  );
};

export default AddPiece;
