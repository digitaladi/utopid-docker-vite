import React from "react";
import { NavLink } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TimelineIcon from "@mui/icons-material/Timeline";
const Sidebar = () => {
  return (
    <nav className="nav_bar_profile h-[50%]  w-1/11 flex flex-col justify-center border-r-4 border-double font-utopid font-bold">
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
        <div>L'histoire de Utopid</div>
      </NavLink>



      <NavLink
        className="    bg-[url('./images/cactus.jpg')] bg-cover w-[100%]  bg-no-repeat    h-15 text-center flex flex-col justify-center items-center"
        to="/compte/utopid_history"
      >
     

      </NavLink>


    </nav>
  );
};

export default Sidebar;
