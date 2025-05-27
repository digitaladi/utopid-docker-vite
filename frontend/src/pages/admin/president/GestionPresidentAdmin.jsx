import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import toast from "react-hot-toast";
import toasterCustum from "@utils/ToasterCustom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const GestionPresidentAdmin = () => {
  const [presidents, setPresidents] = useState([]);
  //initiation de la pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalItems: 0,
    totalPages: 1,
  });

  //la fonction qui déclecnhe la pagination de chaque page
  const handlePageChange = (event, newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  return (
    <div className="relative overflow-x-auto shadow-md">
      <div className="bg-gray-50 flex flex-row justify-between mb-3 p-5">
        <div>
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-[#00598a] focus:border-[#00598a] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00598a] dark:focus:border-[#00598a]"
                placeholder="Rechercher..."
                required
              />
            </div>
          </form>
        </div>

        <NavLink
          to="/admin/gestion/president/add"
          className="bg-[#00598a]  border-1 border-[#00598a] p-2 font-bold text-[#ecfeff]  hover:bg-[#ecfeff] hover:text-[#00598a] cursor-pointer"
        >
          {" "}
          <p>
            {" "}
            <AddIcon /> Ajouter
          </p>{" "}
        </NavLink>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#00598a] uppercase bg-[#ecfeff] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">Voir</div>
            </th>

            <th scope="col" className="px-6 py-3">
              Avatar
            </th>

            <th scope="col" className="px-6 py-3">
              Nom d'utilisateur
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Prenom
            </th>
            <th scope="col" className="px-6 py-3">
              Nom
            </th>

            <th scope="col" className="px-6 py-3">
              Crée le
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {presidents &&
            presidents.map((user, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <NavLink to={`/admin/gestion/user/show/${user.id}`}>
                        {" "}
                        <VisibilityIcon />{" "}
                      </NavLink>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {" "}
                    <img
                      className=" w-8 h-8 rounded-full"
                      src={
                        user.avatar
                          ? `http://localhost:4000/uploads/avatars/${user.avatar}`
                          : `http://localhost:4000/uploads/defaults/avatar-default.jpg`
                      }
                      alt="image description"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.username || "N/A"}
                  </th>

                  <td className="px-6 py-4"> {user.email || "N/A"}</td>
                  <td className="px-6 py-4">{user.firstname || "N/A"}</td>
                  <td className="px-6 py-4">{user.lastname || "N/A"}</td>
                  <td className="px-6 py-4">
                    {new Date(user.createdAt).toLocaleDateString() || "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <NavLink onClick={() => handleDeteleUserAdmin(user.id)}>
                      <HighlightOffIcon className="cursor-pointer mr-3 " />
                    </NavLink>

                    <NavLink to={`/admin/gestion/user/edit/${user.id}`}>
                      <EditNoteIcon className="cursor-pointer" />
                    </NavLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <nav
        className="flex items-center justify-center flex-column flex-wrap md:flex-row  p-4"
        aria-label="Table navigation"
      >
        <Stack spacing={2}>
          <Pagination
            count={pagination.totalPages} //le nombre de page
            page={pagination.page} //la page courante,
            onChange={handlePageChange} //la fonction qui chnage de page
            //color="primary"
            showFirstButton
            showLastButton
          />
        </Stack>
      </nav>
    </div>
  );
};

export default GestionPresidentAdmin;
