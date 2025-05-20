import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "@p_admin/AdminLayout";
import AdminHome from "@p_admin/AdminHome";
import GestionUserAdmin from "@p_admin/user/GestionUserAdmin";
import GestionPieceAdmin from "@p_admin/piece/GestionPieceAdmin";
import GestionCountryAdmin from "@p_admin/country/GestionCountryAdmin";
import GestionPresidentAdmin from "@p_admin/president/GestionPresidentAdmin";

import Statistiques from "@p_admin/Statistiques";
import LiensUtiles from "@p_admin/LiensUtiles";
import Gestion from "@p_admin/Gestion";
import Documentation from "@p_admin/Documentation";
import GestionAvisAdmin from "@p_admin/avis/GestionAvisAdmin";
import AddUser from "@p_admin/user/AddUser";
import EditUser from "@p_admin/user/EditUser";
import ShowUser from "@p_admin/user/ShowUser";
import AddPiece from "@p_admin/piece/AddPiece";
import AddPresident from "@p_admin/president/AddPresident";
import ShowPresident from "@p_admin/president/ShowPresident";
import AddAvis from "@p_admin/avis/AddAvis";
import EditAvis from "@p_admin/avis/EditAvis";
import ShowAvis from "@p_admin/avis/ShowAvis";
import EditPresident from "@p_admin/president/EditPresident";
import EditPiece from "@p_admin/piece/EditPiece";
import ShowPiece from "@p_admin/piece/ShowPiece";
import AddCountry from "@p_admin/country/AddCountry";
import EditCountry from "@p_admin/country/EditCountry";
import ShowCountry from "@p_admin/country/ShowCountry";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
      <Route path="/home" element={<AdminHome />} />
        <Route path="/gestion" element={<Gestion />}>
          <Route index element={<GestionUserAdmin />} />
          <Route path="/gestion/user">
            <Route index element={<GestionUserAdmin />} />
            <Route path="/gestion/user/add" element={<AddUser />} />
            <Route path="/gestion/user/edit/:id" element={<EditUser />} />
            <Route path="/gestion/user/show/:id" element={<ShowUser />} />
          </Route>

          <Route path="/gestion/piece">
            <Route index element={<GestionPieceAdmin />} />
            <Route path="/gestion/piece/add" element={<AddPiece />} />
            <Route path="/gestion/piece/edit/:id" element={<EditPiece />} />
            <Route path="/gestion/piece/show/:id" element={<ShowPiece />} />
          </Route>

          <Route path="/gestion/country">
            <Route index element={<GestionCountryAdmin />} />
            <Route path="/gestion/country/add" element={<AddCountry />} />
            <Route path="/gestion/country/edit/:id" element={<EditCountry />} />
            <Route path="/gestion/country/show/:id" element={<ShowCountry />} />
          </Route>

          <Route path="/gestion/president">
            <Route index element={<GestionPresidentAdmin />} />
            <Route path="/gestion/president/add" element={<AddPresident />} />
            <Route path="/gestion/president/edit/:id" element={<EditPresident />} />
            <Route path="/gestion/president/show/:id" element={<ShowPresident />} />
          </Route>

          <Route path="/gestion/avis" >
          <Route index element={<GestionAvisAdmin />} />
            <Route path="/gestion/avis/add" element={<AddAvis />} />
            <Route path="/gestion/avis/edit/:id" element={<EditAvis />} />
            <Route path="/gestion/avis/show/:id" element={<ShowAvis />} />
          </Route>



        </Route>

        <Route path="/liens_utiles" element={<LiensUtiles />} />
        <Route path="/statistiques" element={<Statistiques />} />
        <Route path="/docu" element={<Documentation />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
