import React from "react";
import { NavLink } from "react-router-dom";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FlagIcon from '@mui/icons-material/Flag';
import Person3Icon from '@mui/icons-material/Person3';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PeopleIcon from '@mui/icons-material/People';
const MenuGestion = () => {
  return (
    <div className="flex flex-row justify-between gap-2 mb-10">
      {/*   <h1 className="text-4xl h-auto p-2">Gestion du site</h1>  */}

      <NavLink
    className={({ isActive }) =>`${ isActive ? "opacity-30" : " opacity-100" } text-[20px] font-bold bg-[#8eb4c7] text-dark-utopid w-1/5 flex flex-row justify-between items-center`}
      //  className="text-[20px] font-bold bg-[#8eb4c7] text-dark-utopid w-1/5 flex flex-row justify-between items-center  hover:opacity-30"
        to="/admin/gestion/user"
      >
        <div className="p-5">Utilisateurs</div>
        <div className=" w-[60px] text-center">
          <PeopleIcon fontSize="large" />
        </div>
      </NavLink>

      <NavLink
      className={({ isActive }) =>`${ isActive ? "opacity-30" : " opacity-100" } text-[20px] font-bold bg-[#ddede8] text-dark-utopid w-1/5 flex flex-row justify-between items-center`}
     //   className="text-[20px] font-bold bg-[#ddede8]  text-dark-utopid w-1/5 flex flex-row justify-between items-center  hover:opacity-30"
        to="/admin/gestion/piece"
      >
        <div className="p-5">Pièces</div>
        <div className=" w-[60px] text-center">
          <FingerprintIcon  fontSize="large" />
        </div>
    
      </NavLink>

      <NavLink
       className={({ isActive }) =>`${ isActive ? "opacity-30" : " opacity-100" } text-[20px] font-bold bg-[#f0efe2] text-dark-utopid w-1/5 flex flex-row justify-between items-center`}
     //   className="text-[20px] font-bold bg-[#f0efe2]  text-dark-utopid w-1/5 flex flex-row justify-between items-center hover:opacity-30"
        to="/admin/gestion/president"
      >
        <div className="p-5">Présidents</div>
        <div className=" w-[60px] text-center">
          <Person3Icon fontSize="large" />
        </div>
      </NavLink>

      <NavLink
       className={({ isActive }) =>`${ isActive ? "opacity-30" : " opacity-100" } text-[20px] font-bold bg-[#b5c6d7] text-dark-utopid w-1/5 flex flex-row justify-between items-center`}
       //className=" text-[20px] font-bold bg-[#b5c6d7]  text-dark-utopid w-1/5 flex flex-row justify-between items-center  hover:opacity-30"
        to="/admin/gestion/country"
      >
        <div className="p-5">Pays</div>
        <div className=" w-[60px] text-center">
          <FlagIcon fontSize="large"  />
        </div>
      </NavLink>

      <NavLink
       className={({ isActive }) =>`${ isActive ? "opacity-30" : " opacity-100" } text-[20px] font-bold bg-[#e8c9c7] text-dark-utopid w-1/5 flex flex-row justify-between items-center`}
      //  className=" text-[20px] font-bold bg-[#e8c9c7] text-dark-utopid w-1/5 flex flex-row justify-between items-center  hover:opacity-30"
        to="/admin/gestion/avis"
      >
        <div className="p-5">Avis</div>
        <div className=" w-[60px] text-center">
          <NotificationAddIcon fontSize="large"  />
        </div>
      </NavLink>
    </div>
  );
};

export default MenuGestion;
