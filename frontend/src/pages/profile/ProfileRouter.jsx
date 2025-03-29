import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileLayout from '@p_profile/ProfileLayout';
import ProfileHome from '@p_profile/ProfileHome';
import EspaceProfile from '@p_profile/EspaceProfile';
import UtopidHistory from '@p_profile/UtopidHistory';
import GestionPieces from '@p_profile/GestionPieces';
import AddPiece from '@p_profile/gestions_pieces/AddPiece';
import MyPieces from '@p_profile/gestions_pieces/MyPieces';
import MesStats from '@p_profile/gestions_pieces/MesStats';

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