import React from "react";
import { NavLink } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuIcon from "@mui/icons-material/Menu";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InstagramIcon from "@mui/icons-material/Instagram";
import authService from "../../_services/auth.service";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import utopid_logo from "@img/logo_utopid.png";
const Sidebar = () => {
  const navigate = useNavigate();
  let logout = () => {
    authService.logout();
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="nav_bar_profile  h-[100%] top flex flex-col  w-[10%]  fixed  font-utopid justify-between font-bold">
      <div className=" bg-intermediaire-utopid h-[45px]   text-center text-dark-utopid border-b-6 border-b-white p-2 cursor-pointer">
        <div className="flex flex-row justify-center">
          <img src={utopid_logo} alt="Recto" className="w-[20px] h-[20px]" />
          <NavLink className="pl-2">UTOPID</NavLink>
        </div>
      </div>

      <NavLink
        //{` ${({isActive}) => isActive ? "bg-intermediaire-utopid" : "property-info-nav-link"} property-info-nav-item `}
        //  className=" hover:bg-intermediaire-utopid hover:text-dark-utopid  bg-dark-utopid border-intermediaire-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/dashboard/home"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
      >
        <SpaceDashboardIcon />
        <div>Dashboard</div>
      </NavLink>

      <NavLink
        //  className=  "hover:bg-intermediaire-utopid hover:text-dark-utopid   bg-dark-utopid border-intermediaire-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/dashboard/espace"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
      >
        <ManageAccountsIcon />
        <div>Mon espace</div>
      </NavLink>

      <NavLink
        //  className=" hover:bg-intermediaire-utopid hover:text-dark-utopid  bg-dark-utopid  border-intermediaire-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/dashboard/add_piece"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
      >
        <SettingsApplicationsIcon />
        <div>Créer une pièce</div>
      </NavLink>

      <NavLink
        //className=" hover:bg-intermediaire-utopid hover:text-dark-utopid   bg-dark-utopid border-intermediaire-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/dashboard/my_pieces"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
      >
        <FormatListNumberedIcon />
        <div>Mes pièces</div>
      </NavLink>

      <NavLink
        //  className=" hover:bg-intermediaire-utopid hover:text-dark-utopid   bg-dark-utopid border-intermediaire-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/dashboard/utopid_history"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-intermediaire-utopid  text-dark-utopid"
              : "text-light-utopid bg-dark-utopid hover:text-gray-300"
          } h-38 text-center flex flex-col justify-center items-center`
        }
      >
        <TimelineIcon />
        <div>Le storytelling</div>
      </NavLink>

      <NavLink
        onClick={() => logout()}
        className="h-[40px] text-center border-t-6  hover:text-dark-utopid border-t-white font-bold flex flex-col justify-center items-center font-mono  text-xs text-amber-50 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)]  p-4 bg-gradient-to-r from-amber-300 to-dark-utopid"
        to="/dashboard/utopid_history"
      >
        <ExitToAppIcon />
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

export default Sidebar;
