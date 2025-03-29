import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const GestionPieces = () => {
    return (
       <div className='gestion_layout'>
                  <nav className='nav_bar_pieces'>
         
         <NavLink to='/compte/gestion_pieces/add_piece'>Ajouter une piéce d'identité utopid</NavLink>
         <NavLink to='/compte/gestion_pieces/my_pieces'>Mes pièces</NavLink>
         <NavLink to='/compte/gestion_pieces/my_stats'>Mes statistiques</NavLink>

 
         </nav>

<div className='nav_bar_pieces_container'>
    <Outlet />
</div>
</div>
        
    );
};

export default GestionPieces;