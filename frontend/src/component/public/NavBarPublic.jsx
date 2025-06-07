import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person2Icon from "@mui/icons-material/Person2";
const NavBarPublic = () => {
  return (
    <nav className="nav_bar_public flex-row  flex w-[100%]  justify-center bg-[#ecfdf5] text-dark-utopid gap-40  ">
      <div className="flex flex-row w-[70%]  justify-between py-8">
        <div className=" font-utopid  w-1/4">
          <InstagramIcon className="text-dark-utopid text font-bold" />
          <NavLink className="pl-2">UTOPID</NavLink>
        </div>
        <div className="flex flex-row w-3/4  justify-end gap-10 text-[#828f99]">
          <NavLink   to="#services" className="p-2 font-bold ease-out duration-500 transition-all  hover:text-dark-utopid">
            Services
          </NavLink>
          <NavLink className="p-2 font-bold ease-out duration-500 transition-all  hover:text-dark-utopid">
            A propos
          </NavLink>
          <NavLink className="p-2 font-bold ease-out duration-500 transition-all  hover:text-dark-utopid">
            Contact
          </NavLink>

          <NavLink className=" p-2 font-bold hover:text-dark-utopid ease-out duration-500 transition-all ">
            Se connecter
          </NavLink>
          <NavLink className="bg-intermediaire-utopid  text-dark-utopid p-2 font-bold rounded-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
            S'inscrire
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPublic;
