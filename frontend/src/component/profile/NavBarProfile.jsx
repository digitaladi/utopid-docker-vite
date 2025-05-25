import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person2Icon from "@mui/icons-material/Person2";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import avatar from "@img/profile.png"
const NavBarProfile = () => {
  return (
    <nav className=" z-1 flex fixed ml-[2%] not-only:flex-row justify-between min-h-[39px] w-[90%]  bg-white pr-6 text-dark-utopid gap-4  border-b-1 border-gray-200">
<div className="flex flex-row " >
      <div className="  flex flex-col justify-center ml-1  text-gray-400"> <MenuOpenIcon /></div>

      <div className=" flex flex-col justify-center   pl-12 text-gray-400">


<div className="flex px-2 py-1 rounded-md  overflow-hidden max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          className="fill-gray-600 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type="email" placeholder="Rechercher..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
      </div>


      </div>
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
        <NavLink      to="/admin" className=" flex flex-col justify-center ">
          <SettingsIcon />
        </NavLink>
        <NavLink className=" flex flex-col justify-center">
        <img className=" w-8 h-8 rounded-full" src={avatar} alt="image description" />
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
