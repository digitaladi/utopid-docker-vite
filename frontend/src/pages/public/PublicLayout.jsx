import { Outlet } from "react-router-dom";
import Footer from "@c_public/Footer";
import logo from "@img/6W7g.gif";
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


      <div className="layout_public h-[100vh]  font-utopid flex-col justify-center hidden lg:flex">
        <Outlet />
      {/*   <Footer />*/}
      </div>
    </>
  );
};

export default PublicLayout;
