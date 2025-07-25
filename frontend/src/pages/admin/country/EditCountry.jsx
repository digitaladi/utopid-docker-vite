import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "@/baseUrl";
import presidentService from "@services/president.service";
import countryService from "@services/country.service";
import { useNavigate } from "react-router-dom";
import toasterCustum from "@utils/ToasterCustom";
import InfoIcon from "@mui/icons-material/Info";
const EditCountry = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    //  reset,
    setValue, //permet de définir des valeurs de champs
  } = useForm();

  const [country, setCountry] = useState({});
  const [previewImage, setPreviewImage] = useState("");
  const [presidents, setPresidents] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    presidentService.getPresidentsAdmin().then((president) => {
      setPresidents(president.data.presidents);
    });

    //chercher le président correspondant  le parametre id
    countryService
      .getOneCountryAdmin(id)
      .then((response) => {
        const country = response.data.data;
        console.log(country);
        // définir les valeurs du formulaire d'edition
        Object.keys(country).forEach((key) => {
          setValue(key, country[key]);
        });
        setCountry(country);
        setPreviewImage(`http://localhost:4000/uploads/flags/${country.flag}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, setValue]);

  //éditer le formulaire
  const OnSubmit = (data) => {
    //pn ajoute les datas dans le formulaire
    // console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("presidentId", data.presidentId);
    formData.append("descriptif", data.descriptif);
    formData.append("typePlante", data.typePlante);

    if (data.flag instanceof FileList) {
      formData.append("flag", data.flag[0]);
    }

    // console.log(data)
    countryService
      .editCountryAdmin(formData, id)
      .then((res) => {
        console.log(res);
        toasterCustum.info(res.data.message);
        navigate("/admin/gestion/country");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-row justify-between  p-5 mb-10 ">
        <p className="text-2xl text-[#8200db] font-bold">
          Modifier {country.name}
        </p>
      </div>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit(OnSubmit)}>
        <div class="relative z-0 w-full mb-15 group">
          <input
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8200db]  focus:outline-none focus:ring-0 focus:border-[#8200db] peer"
            placeholder=" "
            {...register("name", {
              required: "Le nom du pays est requis",
            })}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#8200db] peer-focus:dark:text-[#8200db] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom du du pays
          </label>
        </div>

        <div class="relative z-0 w-full mb-15 group mt-10">
          <label
            for="presidentId"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-whit"
          >
            Président du pays
          </label>
          <select
            id="presidentId"
            class="block w-full p-2 mb-6 text-sm  text-gray-900 border-b border-b-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("presidentId", { required: "Ce champ est requis" })}
            //  disabled={!!president} // Empêche la modification du pays si on édite
          >
            <option>Sélectionner un Président</option>
            {presidents.map((president) => (
              <option key={president.id} value={president.id}>
                {president.name}
              </option>
            ))}
          </select>
          {errors.presidentId && <span>{errors.presidentId.message}</span>}
        </div>

        <div class="relative z-0 w-full mb-15 group">
          <input
            type="text"
            name="typePlante"
            id="typePlante"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#8200db] focus:outline-none focus:ring-0 focus:border-[#8200db] peer"
            placeholder=" "
            {...register("typePlante", {
              required: "Le type de plante du est requis",
            })}
          />
          {errors.typePlante && (
            <span className="text-red-600">{errors.typePlante.message}</span>
          )}
          <label
            for="type_plante"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#8200db] peer-focus:dark:text-[#8200db] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Type de plante du pays
          </label>
        </div>

        {/* 

  <div class="relative z-0 w-full mb-15 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
*/}

        <div class="relative z-0 w-full mb-15 group min-w-[200px]">
          <textarea
            {...register("descriptif", { required: false })}
            class="peer h-full min-h-[100px] w-full resize-none border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700  outline-0  placeholder-shown:border-blue-gray-200 focus:border-[#8200db] focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#8200db] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#8200db] peer-focus:after:scale-x-100 peer-focus:after:border-[#8200db]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Descriptif du pays
          </label>
        </div>

        <div class="relative z-0 w-full mb-15 group">
          <div class="space-y-8 max-w-md mx-auto">
            <label class="text-base text-slate-500 font-medium mb-3 block">
              Drapeau du pays
            </label>
            <div className="border-1 border-[#00598a] w-max p-1.5 mb-1.5">
              <img
                src={previewImage}
                alt="Preview"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            </div>
            <input
              type="file"
              name="flag"
              class="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-[#8200db] file:hover:bg-gray-700 file:text-white"
              {...register("flag", { required: "Le drapeau est requis" })}
            />
            {errors.flag && (
              <span className="text-red-600">{errors.flag.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-row justify-between mt-10">
          <button
            onClick={() => navigate(-1)}
            type="button"
            class="border-1 cursor-pointer border-[#8200db] text-[#f5f3ff] bg-[#8200db] hover:text-[#8200db] hover:bg-[#f5f3ff]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            retour
          </button>

          <button
            type="submit"
            class="border-1 cursor-pointer border-[#8200db] text-[#f5f3ff] bg-[#8200db] hover:text-[#8200db] hover:bg-[#f5f3ff]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Modifier
          </button>
        </div>
      </form>
    </>
  );
};

export default EditCountry;
