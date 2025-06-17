import { Link, NavLink } from "react-router-dom";
import userService from "../../_services/user.service";
import HomeIcon from "@mui/icons-material/Home";
import { useForm } from "react-hook-form";
import illustration from "@img/illustration.png";
import GrassIcon from "@mui/icons-material/Grass";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import authService from "../../_services/auth.service";
import { useEffect } from "react";
const Inscription = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //si connecté on affiche pas cette page d'inscription
  useEffect(() => {
    if (authService.isLogged()) {
      navigate("/dashboard");
    }
  }, []);

  const OnSubmit = (data) => {
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
      .register(formData)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  //useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col h-[100vh] bg-gray-50">
        <div className="w-[100%] flex flex-row justify-end mt-5 pr-6 text-dark-utopid">
          {" "}
          <NavLink to="/">
            {" "}
            <HomeIcon fontSize="large" />
          </NavLink>
        </div>

        <div className="flex flex-row w-[60%] m-auto justify-between items-center shadow-[0_5px_30px_-10px_rgba(0,0,0,0.1)] p-12 h-[80vh]">
          <div className="flex flex-col justify-between gap-14  w-3/5">
            <div className="flex flex-col">
              <p className="text-2xl text-dark-utopid font-light font-utopid">
                Inscrivez vous !{" "}
              </p>

              {/*
              <GrassIcon
                fontSize="large"
                className="text-intermediaire-utopid "
              />
               */}
            </div>
            <div>
              <img className="w-[75%]" src={illustration} />
            </div>
          </div>
          <form class="w-2/5" onSubmit={handleSubmit(OnSubmit)}>
            <div class="relative z-0 w-full mb-8 group">
              <input
                type="username"
                name="username"
                id="username"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00598a]  focus:outline-none focus:ring-0 focus:border-[#00598a] peer"
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
              <div class="relative z-0 w-full mb-8 group">
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

            <div class="relative z-0 w-full mb-8 group">
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
            <div class="relative z-0 w-full mb-8 group">
              <input
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

            <div class="relative z-0 w-full mb-8 group">
              <div class="space-y-8 max-w-md mx-auto">
                <label class="text-base text-slate-900 font-light mb-3 block">
                  Avatar de l'utilisateur
                </label>

                <input
                  type="file"
                  name="avatar"
                  class="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-dark-utopid file:hover:bg-gray-700 file:text-white"
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

              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-dark-utopid rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-utopid  dark:peer-checked:bg-dark-utopid "></div>
              <span class="ms-3 text-sm font-light text-gray-900 dark:text-gray-300">
                J'accepte les termes et conditions
              </span>
            </label>

            <div className="flex flex-col w-[100%] justify-between mt-5">
              <button
                type="submit"
                class="border-1 rounded cursor-pointer w-max border-dark-utopid  text-white bg-dark-utopid  hover:text-dark-utopid  hover:bg-light-utopid  focus:outline-none focus:ring-blue-300 font-bold  text-sm  sm:w-auto px-5 py-2.5 text-center"
              >
                S'inscrire
              </button>
            </div>
            <p className="font-utopid mt-4">
              Vous avez déja un compte ?{" "}
              <Link to="/signin">
                {" "}
                <span className="font-bold text-intermediaire-utopid hover:text-dark-utopid ">
                  Connectez vous
                </span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inscription;
