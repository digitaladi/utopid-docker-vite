import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Person2Icon from '@mui/icons-material/Person2';
const NavBarPublic = () => {
    return (

       
       <nav className='nav_bar_public'>

      <NavLink className="logo_utopid">Utopid</NavLink>
      <NavLink>A propos</NavLink>

      <div className='nav_right_items'>
      <NavLink><FacebookIcon /></NavLink>
      <NavLink><TwitterIcon /> </NavLink>
      <NavLink><InstagramIcon /></NavLink>

      <NavLink><Person2Icon /></NavLink>
      </div>


       </nav>
   
    );
};

export default NavBarPublic;