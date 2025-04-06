import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Breadcrumb = () => {
  return (
    <div className="   w-[100] h-[5vh]  flex flex-row">
      <div className="bg-light-utopid w-1/11  h-[100%] text-center text-dark-utopid border-r-4 border-double p-2 cursor-pointer">
        <MenuIcon />
      </div>
      <div className="w-9/11 ml-20 h-[100%] p-2 border-b-1 border-stone-200">
        {" "}
        Dashbord /
      </div>
    </div>
  );
};

export default Breadcrumb;
