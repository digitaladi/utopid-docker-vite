import React from "react";
import GrassIcon from "@mui/icons-material/Grass";
import flag_brazil from "@img/brazil.png";
import flag_usa from "@img/usa.png";
import flag_vietnam from "@img/vietnam.png";
import flag_russia from "@img/russia.png";
import id_card from "@img/id-card.png";
import img_contact from "@img/contact-us.png";
import FormContact from "../../component/public/FormContact";
import Footer from "../../component/public/Footer";
const Home = () => {
  return (
    <div id="services" className="h-max pt-[150px] flex flex-col">
      <section className="flex flex-col justify-between items-center mb-36  ">
        <div className="text-3xl font-bold pb-6 text-dark-utopid">
          Provide Awesome Services
        </div>
        <p className="w-[30%] justify-center text-center  pb-6 font-sans text-[#828f99]">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
          vulputate.
        </p>
        <GrassIcon fontSize="large" className="text-intermediaire-utopid " />
      </section>

      <section className="flex flex-col justify-between items-center mb-80">
        <div className="flex flex-row justify-between w-[70%] text-left gap-5 pb-6 h-[350px]">
          <div className="bg-white w-1/4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="flex flex-row bg-intermediaire-utopid m-4 p-4 w-max rounded-lg">
              <img className="h-[40px] w-[40px]" src={flag_brazil} />
            </div>
            <div className="m-4 font-bold text-2xl mt-8 text-dark-utopid">
              ArbusteLand
            </div>
            <div className="m-4 font-sans text-[#828f99]">
              Vestibulum eu tortor artett tortor rhoncus porta quis on metus
              morbi comodo nisi vitae neque aliquam aliquam.
            </div>
          </div>
          <div className="bg-white w-1/4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="flex flex-row bg-intermediaire-utopid m-4 p-4 w-max rounded-lg">
              <img className="h-[40px] w-[40px]" src={flag_russia} />
            </div>
            <div className="m-4 font-bold text-2xl mt-8 text-dark-utopid">
              Treeland
            </div>
            <div className="m-4 font-sans text-[#828f99]">
              Quisque rhoncus lectus ut lectus hendrerit at convallis lorem
              ornare pellentesque lobortis hendrerit mattis.
            </div>
          </div>
          <div className="bg-white w-1/4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="flex flex-row bg-intermediaire-utopid m-4 p-4 w-max rounded-lg">
              <img className="h-[40px] w-[40px]" src={flag_usa} />
            </div>
            <div className="m-4 font-bold text-2xl mt-8 text-dark-utopid">
              PlantLand
            </div>
            <div className="m-4 font-sans text-[#828f99]">
              Aliquam dictum mollis sem sed hendrerit tempus sed class aptent
              taciti sociosqu litora conubia himenaeos.
            </div>
          </div>
          <div className="bg-white w-1/4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="flex flex-row bg-intermediaire-utopid m-4 p-4 w-max rounded-lg">
              <img className="h-[40px] w-[40px]" src={flag_vietnam} />
            </div>
            <div className="m-4 font-bold text-2xl mt-8 text-dark-utopid">
              HerbLand
            </div>
            <div className="m-4 font-sans text-[#828f99]">
              Aliquam egestas vehicula sapien cibus sit amet rutrum dolor
              molestie.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ecfdf5] h-max rounded-br-[700px] py-2.5 flex flex-row justify-center align-middle mb-80">
        <div className="flex flex-row w-[70%] justify-between gap-5">
          <div className="w-2/5">
            <img className="w-auto" src={id_card} />
          </div>

          <div className="w-3/5 flex flex-col justify-center">
            <div className="text-3xl text-dark-utopid mb-4">
              Team Collaboration in real time
            </div>
            <div className="text-[#828f99] font-sans">
              Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
              augue in rhoncus Integer mattis enim vel eros bibendum egestas id
              laoreet nisi Praesent malesuada eros at bibendum eleifend Nam nec
              urna hendrerit interdum risus Donec faucibus quis magna sit amet
              laoreet Maecenas finibus semper massa in finibus est venenatis
              quis.
            </div>

            <button class="cursor-pointer mt-4 bg-dark-utopid w-[200px] hover:bg-transparent  text-white font-semibold hover:text-dark-utopid py-2 px-4 border border-dark-utopid hover:border-dark-utopid  rounded">
              Découvrir
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between items-center mb-36  ">
        <div className="text-3xl font-bold pb-6 text-dark-utopid">
          Contactez-nous
        </div>
        <p className="w-[30%] justify-center text-center  pb-6 font-sans text-[#828f99]">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
          vulputate.
        </p>
        <GrassIcon fontSize="large" className="text-intermediaire-utopid " />
      </section>

      <section className="flex flex-col justify-center items-center mb-80  ">
        <div className="flex flex-row justify-between w-[60%] text-left gap-5 pb-6 h-[350px]">
          <div className="w-1/2">
            <img className="w-[80%]" src={img_contact} />
          </div>
          <div className="w-1/2 items-baseline">
            <FormContact />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
