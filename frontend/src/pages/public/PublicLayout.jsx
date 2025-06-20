import { NavLink, Outlet } from "react-router-dom";
import Footer from "@c_public/Footer";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "@img/6W7g.gif";
import NavBarPublic from "../../component/public/NavBarPublic";
import Header from "../../component/public/Header";
const PublicLayout = () => {
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

 
      <div className=" font-utopid flex-col justify-center hidden lg:flex">
        <NavBarPublic />
        <Header />
        <Outlet />
        {/*   <Footer />*/}
      </div>

      {/* 

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
   
      </div>
         */}
    </>
  );
};

export default PublicLayout;
