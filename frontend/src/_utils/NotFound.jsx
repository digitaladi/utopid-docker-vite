import React from 'react'
import logo from "@img/6W7g.gif";
import { Link  } from "react-router-dom";
const NotFound = () => {

  return (
    <>
      <div className="flex   font-utopid flex-col  p-5 bg-intermediaire-utopid h-[100vh]  text-dark-utopid justify-center items-center gap-5 text-center">
        <div className="text-5xl">
          Cette page est introuvable
        </div>

        <img src={logo} />
        <p className="text-2xl">
          La page est probablement réservé aux administrateurs de l'application
        </p>
        <Link
          to="/dashboard"
          type="button"
          className="border-1 cursor-pointer border-dark-utopid text-intermediaire-utopid bg-dark-utopid hover:text-dark-utopid hover:bg-intermediaire-utopid focus:outline-none focus:ring-blue-300 font-bold  text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}

export default NotFound