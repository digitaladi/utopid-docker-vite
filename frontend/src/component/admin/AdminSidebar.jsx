import React from "react";
import { NavLink } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuIcon from "@mui/icons-material/Menu";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InstagramIcon from "@mui/icons-material/Instagram";
import utopid_logo from "@img/logo_utopid.png";
const AdminSidebar = () => {

  return (
    <nav className="nav_bar_profile  h-[100%] top flex flex-col  w-[10%]  fixed  font-utopid justify-between font-bold">
      <div className=" bg-intermediaire-utopid h-[45px]   text-center text-dark-utopid border-b-6 border-b-white p-2 cursor-pointer">
        <div className="flex flex-row justify-center">
          <img src={utopid_logo} alt="Recto" className="w-[20px] h-[20px]" />
          <NavLink className="pl-2">UTOPID</NavLink>
        </div>
      </div>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
        to="/admin/home"
      >
        <SpaceDashboardIcon />
        <div>Home Admin</div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
        to="/admin/gestion"
      >
        <SettingsApplicationsIcon />
        <div>Gestion du site</div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
        to="/admin/statistiques"
      >
        <FormatListNumberedIcon />
        <div>Stats</div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
        to="/admin/liens_utiles"
      >
        <TimelineIcon />
        <div>Liens utiles</div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
        to="/admin/docu"
      >
        <ManageAccountsIcon />
        <div>Documentation</div>
      </NavLink>

      <NavLink
        className="h-[40px] text-center border-t-6 border-t-white font-bold flex flex-col justify-center items-center font-mono  text-xs text-amber-50 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)]  p-4 bg-gradient-to-r from-amber-300 to-dark-utopid"
        to="/dashboard"
      >
        <p>Mon dashboard</p>
      </NavLink>

      {/*       <NavLink
        className="h-[40px] text-center border-t-6 border-t-white  flex flex-col justify-center items-center font-mono font-medium text-xs text-dark-utopid bg-light-utopid"
        to="/dashboard/utopid_history"
      >
          <p>Copyright@utopid</p>
      </NavLink>
      <NavLink
        className="    bg-[url('./images/cactus.jpg')] bg-cover w-[100%]  bg-no-repeat    h-20 text-center flex flex-col justify-center items-center"
        to="/dashboard/utopid_history"
      ></NavLink>
      */}
    </nav>
  );
};

export default AdminSidebar;
