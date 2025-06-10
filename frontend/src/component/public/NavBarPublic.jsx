import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person2Icon from "@mui/icons-material/Person2";
const NavBarPublic = () => {
  //fonction qui fixe et fait apparaitre le menu
  const fixedNavBar = () => {
    window.addEventListener("scroll", function () {
      const nav = document.getElementById("nav");

      if (window.scrollY > 10) {
        nav.classList.remove("bg-[#ecfdf5]");
        nav.classList.add("bg-white", "shadow-md");
        console.log(nav.clientHeight);
      } else {
        nav.classList.add("bg-[#ecfdf5]");
        nav.classList.remove("bg-white", "shadow-md");
      }
    });
  };

  useEffect(() => {
    fixedNavBar();
  }, []);

  return (
    <nav
      id="nav"
      className="fixed flex top-0 left-0 w-full z-1000 justify-center transition-all duration-500  bg-[#ecfdf5] text-dark-utopid gap-40"
    >
      <div className="flex flex-row w-[70%]  justify-between py-5">
        <div
          className=" font-utopid mt-1.5
          w-1/4"
        >
          <InstagramIcon className="text-dark-utopid text font-bold" />
          <NavLink className="pl-2">UTOPID</NavLink>
        </div>
        <div className="flex flex-row w-3/4  justify-end gap-10 text-[#828f99]">
          <NavLink
            to="#services"
            //permet de prendre l'ancrage avec la section qui a l'id services dans la page home. C'est pareila vec le lien a propos et contact
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-2 font-bold ease-out duration-500 transition-all  hover:text-dark-utopid"
          >
            Services
          </NavLink>
          <NavLink
            to="#apropos"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("apropos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-2 font-bold ease-out duration-500 transition-all  hover:text-dark-utopid"
          >
            A propos
          </NavLink>
          <NavLink
            to="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-2 font-bold ease-out duration-500 transition-all  hover:text-dark-utopid"
          >
            Contact
          </NavLink>

          <NavLink
            to="/signin"
            className=" p-2 font-bold hover:text-dark-utopid ease-out duration-500 transition-all "
          >
            Se connecter
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-intermediaire-utopid  text-dark-utopid p-2 font-bold rounded-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          >
            S'inscrire
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPublic;
