import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import avisService from "@services/avis.service";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import CustomRange from "../../../component/partials/CustomRange";
const AddAvis = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //envoie du formulaire
  const OnSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
   // const rating = Number(data.rating) || 0;
    formData.append("rating", data.rating);
    formData.append("comment", data.comment);
    formData.append("reported", data.reported);

    console.log(formData);
    avisService
      .addAvisAdmin(data)
      //  Axios.post("/admin/users/add", formData)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/admin/gestion/avis");
      })
      .catch((error) => {
        console.log(formData);
        console.error(
          "Erreur complète:",
          error.response?.data || error.message
        );
        toast.error(
          error.response?.data?.message || "Erreur lors de l'envoi de l'avis"
        );
      });
  };

  /*
  useEffect(() => {
    countryService.getCountriesAdmin().then((response) => {
      setCountries(response.data.countries);
    });
  }, []);
*/

  return (
    <>
      <div className="bg-gray-50 flex flex-row justify-between  p-5 mb-10 ">
        <p className="text-2xl text-[#9f0712] font-bold">Ajouter un avis</p>
      </div>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit(OnSubmit)}>
        <div class="relative z-0 w-full mb-5 group min-w-[200px]">
          <label
            for="rating"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Noter de 0 à 5 :
          </label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#9f0712] focus:outline-none focus:ring-0 focus:border-[#9f0712] peer"
            type="number"
            name="rating"
            min="0"
            max="5"
            step="1"
            defaultValue="0" // Ajout d'une valeur par défaut
            {...register("rating", {
              required: "La notation est requise",
              valueAsNumber: true, // Convertit automatiquement en number
            })}
          />
          {errors.rating && (
            <span className="text-red-600">{errors.rating.message}</span>
          )}
        </div>

        <div class="relative z-0 w-full mb-5 group min-w-[200px]">
          <textarea
            name="comment"
            class="peer h-full min-h-[100px] w-full resize-none border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700  outline-0  placeholder-shown:border-blue-gray-200 focus:border-[#9f0712] focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
            {...register("comment", {
              required: "Le commentaire est requis",
            })}
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#9f0712] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Commentaire
          </label>
          {errors.comment && (
            <span className="text-red-600">{errors.comment.message}</span>
          )}
        </div>

        <label class="inline-flex items-center mb-15 cursor-pointer">
          <input
            type="checkbox"
            //value="rgpd"
            class="sr-only peer"
            {...register("reported", { required: "Le signal  est requis" })}
          />

          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-[#9f0712] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#9f0712] dark:peer-checked:bg-[#9f0712]"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Signaler l'avis
          </span>

          {errors.reported && (
            <span className="text-red-600">{errors.reported.message}</span>
          )}
        </label>

        <div className="flex flex-row justify-between mt-10">
          <button
            onClick={() => navigate(-1)}
            type="button"
            class="border-1 cursor-pointer border-[#9f0712] text-[#fef2f2] bg-[#9f0712] hover:text-[#9f0712] hover:bg-[#fef2f2]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            retour
          </button>

          <button
            type="submit"
            class="border-1 cursor-pointer border-[#9f0712] text-[#fef2f2] bg-[#9f0712] hover:text-[#9f0712] hover:bg-[#fef2f2]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Créer
          </button>
        </div>
      </form>
    </>
  );
};

export default AddAvis;
