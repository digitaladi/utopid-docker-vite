import React from "react";
import logo from "@img/6W7g.gif";
import AdminSidebar from "@c_admin/AdminSidebar";
import NavBarProfile from "@c_profile/NavBarProfile";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="lg:hidden flex  flex-col  p-5 bg-dark-utopid h-[100vh]  text-light-utopid justify-center items-center gap-5 text-center">
        <div className="text-5xl">
          Désolé, Utopid est uniquement accessible sur ordinateur{" "}
        </div>

        <img src={logo} />
        <p className="text-2xl">
          Pour bénéficier de l'application, veillez utiliser un ordinateur. Nous
          vous remercions de cotre compréhension{" "}
        </p>
      </div>

      <div className="min-h-[100vh]   relative  flex flex-row w-[98vw] font-utopid justify-start content-start">
        {/*   <NavBarProfile /> */}
        <AdminSidebar />
        <div className=" ml-[10%] flex  w-[90%]   items-center justify-start relative flex-col ">
          <NavBarProfile />
          {/*  <Breadcrumb />*/}
          <main className="flex w-[90%] pl-[20px] pt-30 pb-30 min-h-[100vh] ">
            <Outlet />
          </main>
          {/*     <Footer />*/}
        </div>
      </div>


    </>
  );
};

export default AdminLayout;
