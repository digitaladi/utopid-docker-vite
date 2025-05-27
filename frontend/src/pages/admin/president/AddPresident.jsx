
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import presidentService from "@services/president.service";
import toast, { Toaster } from 'react-hot-toast';
const AddPresident = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  //envoie du formaulaire
    const OnSubmit = () => {
console.log("ok")
  };


  return (
   <>
         <div className="bg-gray-50 flex flex-row justify-between  p-5 mb-10 ">
        <p className="text-2xl text-[#00598a] font-bold">
          Ajouter un Président
        </p>
      </div>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit(OnSubmit)}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid  focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
            placeholder=" "
            {...register("name", {
              required: "Le nom du président (plante) est requis",
            })}
          />
          {errors.username && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom du président
          </label>
        </div>



        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-dark-utopid focus:outline-none focus:ring-0 focus:border-dark-utopid peer"
            placeholder=" "
            {...register("pseudo", { required: "Le pseudo du est requis" })}
          />
          {errors.pseudo && (
            <span className="text-red-600">{errors.pseudo.message}</span>
          )}
          <label
            for="pseudo"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark-utopid peer-focus:dark:text-dark-utopid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Le pseudo du président 
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
            <label class="text-base text-slate-900 font-medium mb-3 block">
              Image du président
            </label>

            <input
              type="file"
              name="image"
              class="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-[#00598a] file:hover:bg-gray-700 file:text-white"
              {...register("image", { required: false })}
            />
          </div>
        </div>



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
            Créer
          </button>
        </div>
      </form>
   </>
  )
}

export default AddPresident