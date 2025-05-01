import React from "react";
import { Outlet } from "react-router-dom";
import NavBarProfile from "@c_profile/NavBarProfile";
import Footer from "@c_profile/Footer";
import Sidebar from "@c_profile/Sidebar";
import Breadcrumb from "@c_profile/Breadcrumb";
import logo from "@img/6W7g.gif";
const ProfileLayout = () => {
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
      <Sidebar />
      <div className=" ml-[10%] flex  w-[90%]   items-center justify-start relative flex-col ">
      <NavBarProfile /> 
     {/*  <Breadcrumb />*/}
        <main className="flex w-[90%] pt-30 pb-30 min-h-[100vh]">
          <Outlet />
        </main>
    {/*     <Footer />*/}
      </div>
   
    </div>
    </>
  );
};

export default ProfileLayout;
