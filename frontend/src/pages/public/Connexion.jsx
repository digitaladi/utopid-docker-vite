import HomeIcon from "@mui/icons-material/Home";
import { useForm } from "react-hook-form";
import illustration from "@img/illustration.png";
import GrassIcon from "@mui/icons-material/Grass";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import authService from "../../_services/auth.service";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
const Connexion = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

    //si connecté on affiche pas cette page de connexion
  useEffect(() => {
    if (authService.isLogged()) {
      navigate("/dashboard");
    }
  }, []);

  const OnSubmit = (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append("email", data.email);

    formData.append("password", data.password);

    console.log(data);
    authService
      .login(data)
      .then((res) => {
        if (res.data.token.access_token) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          authService.saveToken(res.data.token.access_token);
          toast.success(res.data.message);
          console.log(res.data.user);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

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
                Connectez vous !{" "}
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
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00598a]  focus:outline-none focus:ring-0 focus:border-[#00598a] peer"
                placeholder=" "
                {...register("email", {
                  required: "L'email est requis",
                })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
              <label
                for="email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

            <div class="relative z-0 w-full mb-8 group">
              <p className="cursor-pointer text-intermediaire-utopid hover:text-dark-utopid">
                {" "}
                <NavLink to="/forgot_password">
                  Mot de passe oublié ?
                </NavLink>{" "}
              </p>
            </div>

            <div className="flex flex-col w-[100%] justify-between mt-5">
              <button
                type="submit"
                class="border-1 rounded cursor-pointer w-max border-dark-utopid  text-white bg-dark-utopid  hover:text-dark-utopid  hover:bg-light-utopid  focus:outline-none focus:ring-blue-300 font-bold  text-sm  sm:w-auto px-5 py-2.5 text-center"
              >
                Se connecter
              </button>
            </div>
            <p className="font-utopid mt-4">
              Vous n'avez pas de compte ?{" "}
              <Link to="/signup">
                {" "}
                <span className="font-bold text-intermediaire-utopid hover:text-dark-utopid">
                  Inscrivez vous
                </span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connexion;
