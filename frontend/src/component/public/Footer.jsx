import React from "react";

import { NavLink } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
      <div className="bg-[#ecfdf5] h-max rounded-tl-full rounded-tr-full py-2.5 flex flex-col items-center justify-between align-middle  gap-24">
        <div className="flex flex-row w-[70%] justify-between pt-24 gap-20">
          <div className="flex flex-col w-2/5">
            <div className="flex flex-row gap-1.5">
              <InstagramIcon className="text-dark-utopid  font-bold" />
              <div className="text-2xl text-dark-utopid mb-5">Utopid</div>
            </div>
            <p className="text-[#828f99] font-sans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              quas accusamus eaque provident recusandae pariatur perspiciatis
              labore ipsum officia minus! Nobis rem quod velit non reprehen
              derit vel tempore architecto provident!
            </p>
          </div>
          <div className="flex flex-col w-1/5">
            <div className="  flex flex-col">
              <p className="text-dark-utopid text-2xl mb-5">Services </p>

              <ul class="max-w-md space-y-1   list-disc list-inside text-[#828f99] font-sans">
                <li>Faire une carte</li>
                <li>Partager</li>
                <li>Télécharger</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <div className=" mb-5 flex flex-col">
              <p className="text-dark-utopid text-2xl mb-5">Contact </p>

              <ul class="max-w-md space-y-1   list-none list-inside text-[#828f99] font-sans">
                <li>Tél : 051456254</li>
                <li>Adresse : 4 rue de Monpellier</li>
                <li>93100 Massy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <div className="text-dark-utopid mb-5">
              <p className="text-dark-utopid text-2xl mb-5"> Reseaux</p>
              <div className=" flex flex-row justify-between rounded-sm  text-dark-utopid">
                <NavLink
                  to="https://twitter.com/Samuel7Abera7/"
                  className="p-2  opacity-100 hover:opacity-50 h-12"
                >
                  <TwitterIcon />
                </NavLink>

                <NavLink
                  to=""
                  className="p-2  opacity-100 hover:opacity-50 h-12"
                >
                  <FacebookOutlinedIcon />
                </NavLink>

                <NavLink
                  to=""
                  className="p-2  opacity-100 hover:opacity-50 h-12"
                >
                  <InstagramIcon />
                </NavLink>

                <NavLink
                  to=""
                  className="p-2  opacity-100 hover:opacity-50 h-12"
                >
                  <YouTubeIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[70%] justify-center p-9 border-t-1 border-[rgba(0,0,0,.1)]">
          <p className="h-max">2025 Copyright@utopid</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
