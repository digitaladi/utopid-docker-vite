import NavBarPublic from "@c_public/NavBarPublic";

const Header = ({ children }) => {
  return (
    <div className=" flex flex-row h-[90vh] w-[100%]  bg-[#ecfdf5] justify-center rounded-bl-[700px]">
      <div className="w-[70%] flex flex-row justify-between pt-48">
        <div className="flex flex-col w-2/5">
          <div className="text-5xl pb-9 text-dark-utopid">Utopid</div>

          <div className="text-3xl font-bold text-dark-utopid pb-16">
            Donner vie à votre plante !
          </div>

          <p className="text-2xl text-[#828f99] pb-6 font-sans">
            Vestibulum egestas magna ut aliquet sodales nunc fermentum ligula
            quis tidunt vitae massa.  
          </p>
          <button class="cursor-pointer  bg-dark-utopid w-[200px] hover:bg-transparent  text-white font-semibold hover:text-dark-utopid py-2 px-4 border border-dark-utopid hover:border-dark-utopid  rounded">
            Button
          </button>
        </div>
        <div className="bg-[url('./images/illustration.png')] bg-cover w-2/5   bg-no-repeat  bg-bottom flex flex-row justify-between gap-5"></div>
      </div>

      {/*    <NavBarPublic /> 
      <div className="header_2 flex flex-col justify-center items-center  w-[70%] m-auto">
        <div className="bg-[url('./images/article1.jpg')] bg-cover w-[100%]  bg-no-repeat h-[65vh] bg-bottom flex flex-row justify-between gap-5">
          <div className="accroche_title text-4xl font-utopid text-dark-utopid pb-15 w-2/3">
            <h2 className="mt-20 ml-20">Donner vie à votre plante ! </h2>
          </div>

          <div className="wrap_form_use bg-light-utopid w-auto h-[100%] p-5 border-l border-dashed border-gray-500 flex flex-col justify-between">
            {children}
          </div>
        </div>
      </div>
*/}
    </div>
  );
};

export default Header;
