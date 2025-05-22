import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from '@mui/icons-material/Add';
import Axios from "@/baseUrl";
import avatar from "@img/profile.png";
import { NavLink } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
const GestionUserAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("/admin/users/add")
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })

      .catch((err) => {
        console.log(err.messsage);
      });

    /*
  return () => {
    second
  }
    */
  }, []);

  return (
    <div class="relative overflow-x-auto shadow-md">
      <div className="bg-gray-50 flex flex-row justify-between mb-3 p-5">
        <div>
          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md   bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rechercher..."
                required
              />
            </div>
          </form>
        </div>

    <NavLink to="/admin/gestion/user/add" className="bg-[#b5c6d7] p-2 font-bold text-dark-utopid rounded-md  cursor-pointer">  <p> <AddIcon />   Ajouter</p> </NavLink>     
      </div>

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
             Voir

              </div>
            </th>

            <th scope="col" class="px-6 py-3">
              Avatar
            </th>

            <th scope="col" class="px-6 py-3">
              Nom d'utilisateur
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Prenom
            </th>
            <th scope="col" class="px-6 py-3">
              Nom
            </th>

            <th scope="col" class="px-6 py-3">
              Crée le
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr
                  key={index}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
 <NavLink to={`/admin/gestion/user/show/${user.id}`}> <VisibilityIcon /> </NavLink>
                    </div>
                  </td>

                  <td class="px-6 py-4">
                    {" "}
                    <img
                      class=" w-8 h-8 rounded-full"
                      src={avatar}
                      alt="image description"
                    />
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.username || "N/A"}
                  </th>

                  <td class="px-6 py-4"> {user.email || "N/A"}</td>
                  <td class="px-6 py-4">{user.firstname || "N/A"}</td>
                  <td class="px-6 py-4">{user.lastname || "N/A"}</td>
                  <td class="px-6 py-4">{new Date(user.createdAt).toLocaleDateString() || "N/A"}</td>
                  <td class="px-6 py-4">

                   <NavLink><HighlightOffIcon className="cursor-pointer mr-3 " /></NavLink>
                    
                  <NavLink to={`/admin/gestion/user/edit/${user.id}`}>  <EditNoteIcon className="cursor-pointer" /></NavLink>
                    
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Affichage 
          <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
          de
          <span class="font-semibold text-gray-900 dark:text-white">1000</span>
        </span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              précédent 
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              suivant
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default GestionUserAdmin;
