const TexteHeader = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-3xl pb-9 font-bold text-dark-utopid w-[40%]">
        Donner vie à votre plante !
      </div>

      <div className="text-2xl  text-dark-utopid w-[40%]">
        Vestibulum egestas magna ut aliquet sodales nunc fermentum ligula quis
        tidunt vitae massa.
      </div>
           <button class="cursor-pointer  bg-dark-utopid w-[200px] hover:bg-transparent  text-white font-semibold hover:text-dark-utopid py-2 px-4 mt-6 border border-dark-utopid hover:border-dark-utopid  rounded">
                Découvrir
          </button>
      {/*
          <p className="text-2xl text-[#828f99] pb-6 font-sans">
            Vestibulum egestas magna ut aliquet sodales nunc fermentum ligula
            quis tidunt vitae massa.  
          </p>
        
          <button class="cursor-pointer  bg-dark-utopid w-[200px] hover:bg-transparent  text-white font-semibold hover:text-dark-utopid py-2 px-4 border border-dark-utopid hover:border-dark-utopid  rounded">
                Découvrir
          </button>
           */}
    </div>
  );
};

export default TexteHeader;
