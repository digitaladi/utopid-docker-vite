import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person2Icon from "@mui/icons-material/Person2";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "@img/profile.png"
const NavBarProfile = () => {
  return (
    <nav className="flex fixed ml-[2%] not-only:flex-row justify-between min-h-[39px] w-[90%]  bg-white pr-6 text-dark-utopid gap-4  border-b-1 border-gray-200">
      <div className="flex flex-col justify-center  pl-6 text-gray-400">
        <SearchIcon />
      </div>

      <div className="flex flex-row justify-end gap-5">
        {/* 
        <NavLink>
          <FacebookIcon />
        </NavLink>
        <NavLink>
          <TwitterIcon />
        </NavLink>
        <NavLink>
          <InstagramIcon />
        </NavLink>
*/}
        <NavLink className=" flex flex-col justify-center ">
          <NotificationsNoneIcon />
        </NavLink>
        <NavLink className=" flex flex-col justify-center ">
          <SettingsIcon />
        </NavLink>
        <NavLink className=" flex flex-col justify-center">
        <img class=" w-8 h-8 rounded-full" src={avatar} alt="image description" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBarProfile;

{
  /* 
        <nav className='nav_bar_profile'>
         
     

        <NavLink to='/compte'>Mon espace Home</NavLink>
        <NavLink to='/compte/espace'>Mon profil</NavLink>
        <NavLink to='/compte/gestion_pieces'>Gestion des pièces</NavLink>
        <NavLink to='/compte/utopid_history'>L'histoire de Utopid</NavLink>
      
        </nav>
          */
}
