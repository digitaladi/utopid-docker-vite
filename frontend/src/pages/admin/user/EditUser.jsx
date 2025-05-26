import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "@/baseUrl";
import userService from "@services/user.service";
import { useNavigate } from "react-router-dom";
import toasterCustum from "@utils/ToasterCustom"
import InfoIcon from "@mui/icons-material/Info";
const EditUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    //  reset,
    setValue, //permet de définir des valeurs de champs
  } = useForm();

  const [user, setUser] = useState({});
  const [previewImage, setPreviewImage] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    //chercher l'utilisateur correspondant  le parametre id
    userService.getOneUserOfAdmin(id).then((response) => {
      // setUser(response.data.data)
      // console.log(user);
      const user = response.data.data;

      // définir les valeurs du formulaire d'edition
      Object.keys(user).forEach((key) => {
        setValue(key, user[key]);
      });
      setUser(user);
      setPreviewImage(
        user.avatar
          ? `http://localhost:4000/uploads/avatars/${user.avatar}`
          : ""
      );
    });
  }, [id, setValue]);

  //éditer le formulaire
  const OnSubmit = (data) => {
    //pn ajoute les datas dans le formulaire
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("lastname", data.lastname);
    formData.append("firstname", data.firstname);
    formData.append("rgpd", data.rgpd);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.avatar instanceof FileList) {
      formData.append("avatar", data.avatar[0]);
    }

    userService
      .editUserAdmin(formData, id)
      .then((res) => {
        console.log(res.data);
        toasterCustum.info(res.data.message)
        navigate("/admin/gestion/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-row justify-between  p-5 mb-10 ">
        <p className="text-2xl text-[#00598a] font-bold">
          Modifier l'utilisateur {user.username}
        </p>
      </div>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit(OnSubmit)}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="username"
            name="username"
            id="username"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid  focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
            placeholder=" "
            {...register("username", {
              required: "Le nom d'utilisateur est requis",
            })}
          />
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
          <label
            for="username"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom d'utilisateur
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
              placeholder=" "
              {...register("firstname", { required: false })}
            />
            <label
              for="firstname"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prenom
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
              placeholder=" "
              {...register("lastname", { required: false })}
            />
            <label
              for="lastname"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nom
            </label>
          </div>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
            placeholder=" "
            {...register("email", { required: "L'email est requis" })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            disabled
            type="password"
            name="password"
            id="password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
            placeholder=" "
            {...register("password", {
              required: "Le mot de passe  est requis",
            })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
          <label
            for="password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mot de passe
          </label>
        </div>

        {/* 

  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
*/}

        <div class="relative z-0 w-full mb-5 group">
          <div class="space-y-8 max-w-md mx-auto">
            {user.avatar ? (
              <>
                <label class="text-base text-slate-900 font-medium mb-3 block">
                  Avatar actuel de l'utilisateur
                </label>
                <div className="border-1 border-[#00598a] w-max p-1.5 mb-1.5">
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </div>
              </>
            ) : null}
            <input
              type="file"
              name="avatar"
              class="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-[#00598a] file:hover:bg-gray-700 file:text-white"
              {...register("avatar", { required: false })}
            />
          </div>
        </div>
        <p>
          {errors.rgpd && (
            <span className="text-red-600">{errors.rgpd.message}</span>
          )}
        </p>
        <label class="inline-flex items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            //value="rgpd"
            class="sr-only peer"
            {...register("rgpd", { required: "Le rgpd  est requis" })}
          />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-dark-utopid rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00598a] dark:peer-checked:bg-[#00598a]"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            J'accepte les termes et conditions
          </span>
        </label>

        <div className="flex flex-row justify-between mt-10">
          <button
            onClick={() => navigate(-1)}
            type="button"
            class="border-1 border-[#00598a] text-[#ecfeff] bg-[#00598a] hover:text-[#00598a] hover:bg-[#ecfeff]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            retour
          </button>

          <button
            type="submit"
            class="border-1 border-[#00598a] text-[#ecfeff] bg-[#00598a] hover:text-[#00598a] hover:bg-[#ecfeff]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Modifier
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUser;
