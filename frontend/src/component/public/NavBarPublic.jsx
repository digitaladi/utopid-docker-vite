import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Person2Icon from '@mui/icons-material/Person2';
const NavBarPublic = () => {
    return (

       
       <nav className='nav_bar_public flex    sm:flex-col md:flex-row md:justify-evenly md:h-20 items-center bg-dark-utopid text-light-utopid gap-40 md:basis-full shadow-md'>

      <NavLink className="logo_utopid text-4xl font-utopid font-bold">Utopid</NavLink>
      <NavLink className="basis-1/3">A propos</NavLink>

      <div className='nav_right_items basis-1/3 text-right flex flex-row justify-end gap-5'>
      <NavLink><FacebookIcon /></NavLink>
      <NavLink><TwitterIcon /> </NavLink>
      <NavLink><InstagramIcon /></NavLink>

      <NavLink className="basis-20"><Person2Icon /></NavLink>
      </div>


       </nav>
   
    );
};

export default NavBarPublic;