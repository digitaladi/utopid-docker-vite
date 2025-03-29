import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarProfile = () => {
    return (
        <nav className='nav_bar_profile'>
         
        <NavLink to='/compte'>Mon espace Home</NavLink>
        <NavLink to='/compte/espace'>Mon profil</NavLink>
        <NavLink to='/compte/gestion_pieces'>Gestion des pièces</NavLink>
        <NavLink to='/compte/utopid_history'>L'histoire de Utopid</NavLink>

        </nav>
    );
};

export default NavBarProfile;