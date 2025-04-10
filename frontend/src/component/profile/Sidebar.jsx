import React from "react";
import { NavLink } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuIcon from "@mui/icons-material/Menu";
const Sidebar = () => {
  return (
    <nav className="nav_bar_profile  fixed  top-[65px] flex flex-col  w-[22vh] justify-center border-r-4 border-double font-utopid font-bold">
      <div className=" bg-light-utopid   h-[100%] text-center text-dark-utopid mb-1 p-2 cursor-pointer">
        <MenuIcon />
      </div>

      <NavLink
        className="border-b-1  hover:bg-light-utopid hover:text-dark-utopid  bg-dark-utopid border-light-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/compte"
      >
        <SpaceDashboardIcon />
        <div>Dashboard</div>
      </NavLink>

      <NavLink
        className="border-b-1     hover:bg-light-utopid hover:text-dark-utopid  bg-dark-utopid  border-light-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/compte/espace"
      >
        <SettingsApplicationsIcon />
        <div>Créer une pièce</div>
      </NavLink>

      <NavLink
        className="border-b-1  hover:bg-light-utopid hover:text-dark-utopid   bg-dark-utopid border-light-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/compte/gestion_pieces"
      >
        <FormatListNumberedIcon />
        <div>Mes pièces</div>
      </NavLink>

      <NavLink
        className="border-b-1  hover:bg-light-utopid hover:text-dark-utopid   bg-dark-utopid border-light-utopid text-light-utopid  h-38 text-center flex flex-col justify-center items-center"
        to="/compte/utopid_history"
      >
        <TimelineIcon />
        <div>Le storytelling</div>
      </NavLink>

      <NavLink
        className="    bg-[url('./images/cactus.jpg')] bg-cover w-[100%]  bg-no-repeat    h-20 text-center flex flex-col justify-center items-center"
        to="/compte/utopid_history"
      ></NavLink>
    </nav>
  );
};

export default Sidebar;
