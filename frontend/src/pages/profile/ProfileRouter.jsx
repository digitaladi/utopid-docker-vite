import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileLayout from './ProfileLayout';
import ProfileHome from './ProfileHome';
import EspaceProfile from './EspaceProfile';
import UtopidHistory from './UtopidHistory';
import GestionPieces from './GestionPieces';
import AddPiece from './gestions_pieces/AddPiece';
import MyPieces from './gestions_pieces/MyPieces';
import MesStats from './gestions_pieces/MesStats';

const ProfileRouter = () => {
    return (

<Routes>
    <Route element={<ProfileLayout />}>
        <Route  index element={<ProfileHome />} />
        <Route path='/espace'  element={<EspaceProfile />}/>
        <Route path='/utopid_history'  element={<UtopidHistory />}/>
        <Route path='/gestion_pieces'  element={<GestionPieces />}>
            <Route path='/gestion_pieces/add_piece'  element={<AddPiece  />}/>
            <Route path='/gestion_pieces/my_pieces'  element={<MyPieces  />}/>
            <Route path='/gestion_pieces/my_stats'  element={<MesStats  />}/>
        </Route>
    </Route>
</Routes>
    );
};

export default ProfileRouter;