import React from "react";
import { NavLink } from "react-router-dom";

const MenuGestion = () => {
  return (
    <div className="flex flex-row justify-between ">

   {/*   <h1 className="text-4xl h-auto p-2">Gestion du site</h1>  */}

   
   

            <NavLink className="text-[20px] font-bold bg-fuchsia-400 text-black p-5"   to="/admin/gestion">Gestion des utilisateurs </NavLink>

            <NavLink className="text-[20px] font-bold bg-green-400 text-black p-5 " to="/admin/gestion/piece">Gestion des pièces </NavLink>

            <NavLink className="text-[20px] font-bold bg-amber-500 text-black p-5 " to="/admin/gestion/president">Gestion des présidents</NavLink>

            <NavLink className=" text-[20px] font-bold bg-blue-600 text-black p-5" to="/admin/gestion/country">Gestion des utilisateurs </NavLink>

                 <NavLink className=" text-[20px] font-bold bg-red-700 text-black p-5" to="/admin/gestion/avis">Gestion des avis </NavLink>
      </div>
  
  );
};

export default MenuGestion;
