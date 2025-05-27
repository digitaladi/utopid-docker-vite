import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import presidentService from "@services/president.service";
import toast, { Toaster } from "react-hot-toast";
const AddPresident = () => {
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
    formData.append("name", data.name);
    formData.append("pseudo", data.pseudo);
    formData.append("descriptif", data.descriptif);

    if (data.image instanceof FileList) {
      formData.append("image", data.image[0]);
    }
    // console.log(formData);
    presidentService
      .addPresidentAdmin(formData)
      //  Axios.post("/admin/users/add", formData)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/admin/gestion/president");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-row justify-between  p-5 mb-10 ">
        <p className="text-2xl text-[#894b00] font-bold">
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

        <div class="relative z-0 w-full mb-5 group min-w-[200px]">
          <textarea
            {...register("descriptif", { required: false })}
            class="peer h-full min-h-[100px] w-full resize-none border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700  outline-0  placeholder-shown:border-blue-gray-200 focus:border-dark-utopid focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-utopid after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-utopid peer-focus:after:scale-x-100 peer-focus:after:border-dark-utopid  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Descriptif
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <div class="space-y-8 max-w-md mx-auto">
            <label class="text-base text-slate-500 font-medium mb-3 block">
              Image du président
            </label>

            <input
              type="file"
              name="image"
              class="w-full text-slate-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-[#894b00] file:hover:bg-gray-700 file:text-white"
              {...register("image", { required: "L'image est requise" })}
            />
            {errors.image && (
              <span className="text-red-600">{errors.image.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-row justify-between mt-10">
          <button
            onClick={() => navigate(-1)}
            type="button"
            class="border-1 border-[#894b00] text-[#fefce8] bg-[#894b00] hover:text-[#894b00] hover:bg-[#fefce8]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            retour
          </button>

          <button
            type="submit"
            class="border-1 border-[#894b00] text-[#fefce8] bg-[#894b00] hover:text-[#894b00] hover:bg-[#fefce8]  focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Créer
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPresident;
