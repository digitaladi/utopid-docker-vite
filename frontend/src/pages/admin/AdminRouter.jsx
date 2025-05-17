import React from "react";
import { Route, Routes } from "react-router-dom";
import  AdminLayout  from "@p_admin/AdminLayout";
import  AdminHome  from "@p_admin/AdminHome";
import  GestionUserAdmin  from "@p_admin/GestionUserAdmin";
import  GestionPieceAdmin  from "@p_admin/GestionPieceAdmin";
import  GestionCountryAdmin  from "@p_admin/GestionCountryAdmin";
import  GestionPresidentAdmin  from "@p_admin/GestionPresidentAdmin";

import Statistiques from "@p_admin/Statistiques";
import LiensUtiles from "@p_admin/LiensUtiles";
import Gestion from "@p_admin/Gestion";
import Documentation from "@p_admin/Documentation";
import GestionAvisAdmin from "@p_admin/GestionAvisAdmin";

 const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminHome />} />

        <Route path="/gestion" element={<Gestion />}>
        <Route   index element={<GestionUserAdmin />} />
        <Route path="/gestion/piece" element={<GestionPieceAdmin />} />
        <Route path="/gestion/country" element={<GestionCountryAdmin />} />
        <Route path="/gestion/president" element={<GestionPresidentAdmin />} />
         <Route path="/gestion/avis" element={<GestionAvisAdmin />} />
        </Route>




        <Route path="/liens_utiles"  element={<LiensUtiles />} />
        <Route path="/statistiques"  element={<Statistiques />} />
           <Route path="/docu"  element={<Documentation />} />

      </Route>
    </Routes>
  );
};

export default AdminRouter