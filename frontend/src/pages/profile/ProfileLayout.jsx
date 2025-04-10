import React from "react";
import { Outlet } from "react-router-dom";
import NavBarProfile from "@c_profile/NavBarProfile";
import Footer from "@c_profile/Footer";
import Sidebar from "@c_profile/Sidebar";
import Breadcrumb from "@c_profile/Breadcrumb";

const ProfileLayout = () => {
  return (
    <div className="profile_layout  relative  w-[100%]   min-h-[100vh] flex flex-col  font-utopid justify-start content-start">
      <NavBarProfile />
      <Sidebar />
      <div className="w-[90%] min-h-[100vh] flex ml-[10%]  items-center justify-between flex-col mt-16">
 
      <Breadcrumb />
        <div className="profile_container  flex w-[94%] px-20  pt-3  pb-10 min-h-[90vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
   
    </div>
  );
};

export default ProfileLayout;
