import React, { useEffect, useState } from "react";
import authService from "../../_services/auth.service";
const ProfileHome = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    console.log(currentUser);
  }, []);

  console.log(currentUser);

  return (
    <>
      {currentUser ? (
        <div className="flex flex-col h-auto w-auto gap-4">
          <div className="flex justify-between gap-4 items-center">
            <div className=" w-1/4 text-2xl shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
              Bienvenue{" "}
              <span className="font-bold text-dark-utopid">
                {currentUser.username}
              </span>
            </div>
            <div className="  w-1/4 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
              top 2
            </div>
            <div className=" w-1/4 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
              top 3
            </div>

            <div className=" w-1/4 shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-24 p-6">
              top 4
            </div>
          </div>
          <div className="flex w-auto gap-4 ">
            <div className="w-2/3 bg-light-utopid shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-[520px] p-6">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                eius veniam harum exercitationem! Doloremque libero sed quas
                provident ipsum, eum veniam at sit quis natus mollitia, ducimus,
                voluptas quo neque.
              </p>
            </div>
            <div className=" w-1/3 h-[520px]  justify-between gap-4 flex flex-col ">
              <div className="shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)]  h-5/6 p-6">
                ddddd
              </div>
              <div className="shadow-[-1px_-1px_13px_0px_rgba(0,_0,_0,_0.1)] h-1/6 p-4 bg-gradient-to-r from-amber-300 to-dark-utopid"></div>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            non explicabo unde atque vel necessitatibus delectus doloremque
            recusandae? Soluta eaque possimus debitis sapiente voluptate,
            quibusdam voluptas corrupti obcaecati. Repellendus, recusandae! Fuga
            sint voluptates veniam corporis quo autem nisi doloribus, excepturi
            explicabo repudiandae commodi iusto corrupti natus, ratione ad!
            Architecto laborum labore ullam debitis nesciunt fuga dolorum
            consequuntur provident iste eos. Quidem similique dicta minima quo
            omnis accusantium corporis, impedit ipsum sed repudiandae officiis
            earum culpa illum mollitia repellendus voluptates sequi? Repudiandae
            sequi vel quam, distinctio adipisci mollitia quisquam alias
            deserunt? Culpa doloremque corporis quos consectetur voluptas
            corrupti, dicta deleniti unde numquam quaerat laboriosam cupiditate
            nam, velit, error eum ipsum facere quo dolor maxime iste. Similique
            vel earum ad veniam animi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates non explicabo unde atque vel
            necessitatibus delectus doloremque recusandae? Soluta eaque possimus
            debitis sapiente voluptate, quibusdam voluptas corrupti obcaecati.
            Repellendus, recusandae! Fuga sint voluptates veniam corporis quo
            autem nisi doloribus, excepturi explicabo repudiandae commodi iusto
            corrupti natus, ratione ad! Architecto laborum labore ullam debitis
            nesciunt fuga dolorum consequuntur provident iste eos. Quidem
            similique dicta minima quo omnis accusantium corporis, impedit ipsum
            sed repudiandae officiis earum culpa illum mollitia repellendus
            voluptates sequi? Repudiandae sequi vel quam, distinctio adipisci
            mollitia quisquam alias deserunt? Culpa doloremque corporis quos
            consectetur voluptas corrupti, dicta deleniti unde numquam quaerat
            laboriosam cupiditate nam, velit, error eum ipsum facere quo dolor
            maxime iste. Similique vel earum ad veniam animi! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptates non explicabo unde
            atque vel necessitatibus delectus doloremque recusandae? Soluta
            eaque possimus debitis sapiente voluptate, quibusdam voluptas
            corrupti obcaecati. Repellendus, recusandae! Fuga sint voluptates
            veniam corporis quo autem nisi doloribus, excepturi explicabo
            repudiandae commodi iusto corrupti natus, ratione ad! Architecto
            laborum labore ullam debitis nesciunt fuga dolorum consequuntur
            provident iste eos. Quidem similique dicta minima quo omnis
            accusantium corporis, impedit ipsum sed repudiandae officiis earum
            culpa illum mollitia repellendus voluptates sequi? Repudiandae sequi
            vel quam, distinctio adipisci mollitia quisquam alias deserunt?
            Culpa doloremque corporis quos consectetur voluptas corrupti, dicta
            deleniti unde numquam quaerat laboriosam cupiditate nam, velit,
            error eum ipsum facere quo dolor maxime iste. Similique vel earum ad
            veniam animi!
          </p>
        </div>
      ) : (
        <div className="flex flex-row justify-center text-gray-200 text-8xl items-center h-[50vh]">
          Loading...
        </div>
      )}
    </>
  );
};

export default ProfileHome;
