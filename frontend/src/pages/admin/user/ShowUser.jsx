import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "@services/user.service";

const ShowUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    userService
      .getOneUserOfAdmin(id)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-50 flex flex-row justify-between  p-5 mb-10 ">
        <p className="text-2xl text-[#00598a] ">
          Utilisateur : <span className="font-bold">{user.username}</span>
        </p>
      </div>

      <div className="flex flex-row  px-[10%] py-[2%] h-[50vh]">
        <div className="flex-col flex w-1/4 bg-[#00598a] text-[#ecfeff] justify-start items-center pt-8">
          <div>
            <img
              class=" w-[100px] h-[100px] rounded-full"
              src={`http://localhost:4000/uploads/avatars/${user.avatar}`}
              alt="image description"
            />
          </div>

          <div>
            {" "}
            <p className="text-2xl font-bold pt-16">
              {user.firstname || "N/A"} {user.lastname || "N/A"}
            </p>{" "}
          </div>
          <div>
            <p> {user.email || "N/A"} </p>
          </div>
        </div>
        <div className="flex-col flex w-3/4 bg-[#ecfeff] p-8 justify-around">
          <div className="flex-row flex">
            <div className="w-1/3 flex flex-col justify-start text-center">
              <div className="text-[20px] font-bold text-[#00598a] pb-3">
                Nom d'utilisateur
              </div>
              <div>{user.username || "N/A"}</div>
            </div>
            <div className="w-1/3 flex flex-col justify-start text-center">
              <div className="text-[20px] font-bold text-[#00598a] pb-3">
                Prenom
              </div>
              <div> {user.firstname || "N/A"} </div>
            </div>
            <div className="w-1/3 flex flex-col justify-start text-center">
              <div className="text-[20px] font-bold text-[#00598a] pb-3">
                Nom
              </div>
              <div>{user.lastname || "N/A"}</div>
            </div>
          </div>

          <div className="flex-row flex">
            <div className="w-1/3 flex flex-col justify-start text-center">
              <div className="text-[20px] font-bold text-[#00598a] pb-3">
                Date d'inscription
              </div>
              <div>
                {" "}
                {new Date(user.createdAt).toLocaleDateString() || "N/A"}
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-start text-center">
              <div className="text-[20px] font-bold text-[#00598a] pb-3">
                Est il actif ?
              </div>
              <div>{user.isActive ? "Oui" : "Non"}</div>
            </div>
            <div className="w-1/3 flex flex-col justify-start text-center">
              <div className="text-[20px] font-bold text-[#00598a] pb-3">
                Email
              </div>
              <div>{user.email || "N/A"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
