import HomeIcon from "@mui/icons-material/Home";
import { useForm } from "react-hook-form";
import illustration from "@img/illustration.png";
import GrassIcon from "@mui/icons-material/Grass";
import { Link, NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const OnSubmit = () => {};

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
                Réinitialiser votre mot de passe !{" "}
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
            <div className="relative z-0 w-full mb-8 group p-5 bg-intermediaire-utopid text-dark-utopid text-center">
              Entrez votre adresse e-mail et nous vous enverrons un e-mail avec
              des instructions pour réinitialiser votre mot de passe.
            </div>

            <div className="relative z-0 w-full mb-8 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
                placeholder=" "
                {...register("email", { required: "L'email est requis" })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
              <label
                for="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>

            <div className="flex flex-col w-[100%] justify-between mt-5">
              <button
                type="submit"
                class="border-1 rounded cursor-pointer w-max border-dark-utopid  text-white bg-dark-utopid  hover:text-dark-utopid  hover:bg-light-utopid  focus:outline-none focus:ring-blue-300 font-bold  text-sm  sm:w-auto px-5 py-2.5 text-center"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
