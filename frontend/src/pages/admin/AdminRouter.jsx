import React from "react";
import { Route, Routes } from "react-router-dom";
import  AdminLayout  from "@p_admin/AdminLayout";
import  AdminHome  from "@p_admin/AdminHome";
import  GestionUserAdmin  from "@p_admin/GestionUserAdmin";
import  GestionPieceAdmin  from "@p_admin/GestionPieceAdmin";
import  GestionCountryAdmin  from "@p_admin/GestionCountryAdmin";
import  GestionPresidentAdmin  from "@p_admin/GestionPresidentAdmin";

 const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="/user" element={<GestionUserAdmin />} />
        <Route path="/piece" element={<GestionPieceAdmin />} />
        <Route path="/country" element={<GestionCountryAdmin />} />
        <Route path="/president" element={<GestionPresidentAdmin />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter