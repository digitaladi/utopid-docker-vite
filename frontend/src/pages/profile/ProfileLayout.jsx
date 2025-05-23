import React from "react";
import { Outlet,NavLink } from "react-router-dom";
import NavBarProfile from "@c_profile/NavBarProfile";
import Footer from "@c_profile/Footer";
import Sidebar from "@c_profile/Sidebar";
import Breadcrumb from "@c_profile/Breadcrumb";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
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
          <main className="flex w-[90%] pl-[20px] pt-30 pb-30 min-h-[100vh] ">
            <Outlet />
          </main>
          {/*     <Footer />*/}
        </div>
      </div>


         {/*   [[[[[[[[   RESEAU SOCIAUX     ]]]]]]]]   */}
      <div className="fixed right-2 bottom-20 flex flex-col justify-center rounded-sm bg-intermediaire-utopid text-dark-utopid">
        <NavLink

          to="https://twitter.com/Samuel7Abera7/"
          className="p-2  opacity-100 hover:opacity-50 h-12"
        >
          <TwitterIcon />
        </NavLink>

        <NavLink to="" className="p-2  opacity-100 hover:opacity-50 h-12">
          <FacebookOutlinedIcon />
        </NavLink>

        <NavLink to="" className="p-2  opacity-100 hover:opacity-50 h-12">
          <InstagramIcon />
        </NavLink>
      </div>
    </>
  );
};

export default ProfileLayout;
