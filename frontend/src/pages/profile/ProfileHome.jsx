import React from "react";

const ProfileHome = () => {
  return (
    <div className="flex flex-col h-auto w-auto gap-4">
      <div className="flex justify-between gap-4 items-center">
        <div className=" w-1/3 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
          top 1
        </div>
        <div className="  w-1/3 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
          top 2
        </div>
        <div className=" w-1/3 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
          {" "}
          top 3
        </div>
      </div>
      <div className="flex w-auto gap-4 ">
        <div className="w-2/3 bg-light-utopid shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-[520px] p-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius
            veniam harum exercitationem! Doloremque libero sed quas provident
            ipsum, eum veniam at sit quis natus mollitia, ducimus, voluptas quo
            neque.
          </p>
        </div>
        <div className=" w-1/3 h-[520px]  justify-between gap-4 flex flex-col ">
          <div className="shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)]  h-5/6 p-6">
            ddddd
          </div>
          <div className="shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-1/6 p-4 bg-gradient-to-r from-amber-500 to-dark-utopid"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
