import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pieceService from "@services/piece.service";
import countryService from "@services/country.service";
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

  //envoie du formaulaire
  const OnSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("rating", data.rating);
    formData.append("comment", data.commentaire);

    console.log(formData);
    avisService
      .addAvisAdmin(formData)
      //  Axios.post("/admin/users/add", formData)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/admin/gestion/avis");
      })
      .catch((error) => {
        console.log(formData);
        console.log(error);
        toast.error(error.message);
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
        <CustomRange color="bg-[#9f0712]" label="Noter l'avis" register={{...register("rating", { required: false })}} />
        {/* 
        <div class="relative z-0 w-full mb-15 group">
          <label
            for="rating"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Noter l'avis
          </label>
          <input
            id="rating"
            type="range"
            min="0"
            max="5"
            value="0"
            step="1"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-blue-500"
            {...register("rating", { required: false })}
          />
          <div class="flex justify-between text-xs px-1">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
*/}
        <div class="relative z-0 w-full mb-5 group min-w-[200px]">
          <textarea
            {...register("comment", { required: false })}
            class="peer h-full min-h-[100px] w-full resize-none border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700  outline-0  placeholder-shown:border-blue-gray-200 focus:border-[#9f0712] focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#9f0712] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#9f0712] peer-focus:after:scale-x-100 peer-focus:after:border-[#9f0712]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Commentaire
          </label>
        </div>

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
