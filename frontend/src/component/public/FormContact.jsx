import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
const FormContact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const OnSubmit = (data) => {};

  return (
    <>
      <form class="" onSubmit={handleSubmit(OnSubmit)}>
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

        <div class="relative z-0 w-full mb-5 group min-w-[200px]">
          <textarea
            {...register("message", { required: false })}
            class="peer h-full min-h-[150px] w-full resize-none border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700  outline-0  placeholder-shown:border-blue-gray-200 focus:border-dark-utopid  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-utopid  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-utopid  peer-focus:after:scale-x-100 peer-focus:after:border-dark-utopid   peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Message
          </label>
        </div>

        <div className="flex flex-row w-[100%] justify-end">
          <button
            type="submit"
            class="border-1 rounded cursor-pointer  border-dark-utopid  text-white bg-dark-utopid  hover:text-dark-utopid  hover:bg-light-utopid  focus:outline-none focus:ring-blue-300 font-bold  text-sm  sm:w-auto px-5 py-2.5 text-center"
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
};

export default FormContact;
