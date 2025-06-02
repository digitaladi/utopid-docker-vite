import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { NavLink } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
//import countryService from "@services/country.service";
//import pieceService from "@services/piece.service";
import avisService from "@services/avis.service";
import toast from "react-hot-toast";
import toasterCustum from "@utils/ToasterCustom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const GestionAvisAdmin = () => {
  const [avis, setAvis] = useState([]);
  const [loading, setLoading] = useState(false);

  //initiation de la pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalItems: 0,
    totalPages: 1,
  });

  //suppression d'un avis
  const handleDeleteAvisAdmin = (id) => {
    if (window.confirm("Voulez vous supprimer cet avis")) {
      avisService.deleteAvisAdmin(id).then((res) => {
        //console.log(res.data.message);
        setAvis(avis.filter((avis) => avis.id !== id));
        toasterCustum.warning(res.data.message);
      });
    }
  };

  const fetchAvis = async () => {
    setLoading(true);
    avisService
      .getAvisAdmin(pagination.page, pagination.limit)
      .then((response) => {
        console.log(response.data);
        setAvis(response.data.pieces);

        //un nouveau object pagination avec des valeurs de la requete
        setPagination({
          ...pagination,
          totalItems: response.data.totalItems,
          totalPages: response.data.totalPages,
        });
        setLoading(false);
        // setAvatarUrl(`http://localhost:4000/public/uploads/avatars/${response.data.filename}`)
      })

      .catch((err) => {
        console.log(err.messsage);
        toast.error(err.messsage);
        setLoading(false);
      });
  };

  //fetchUsers() se déclenche à chaque changement de page
  useEffect(() => {
    fetchAvis();
  }, [pagination.page]);

  //la fonction qui déclecnhe la pagination de chaque page
  const handlePageChange = (event, newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  if (loading)
    return (
      <div className="flex flex-row justify-center text-gray-200 text-8xl items-center h-[50vh]">
        Loading...
      </div>
    );

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
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-[#9f0712] focus:border-[#9f0712] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#9f0712] dark:focus:border-[#9f0712]"
                placeholder="Rechercher..."
                required
              />
            </div>
          </form>
        </div>

        <NavLink
          to="/admin/gestion/avis/add"
          className="bg-[#9f0712]  border-1 border-[#9f0712] p-2 font-bold text-[#fef2f2]  hover:bg-[#fef2f2] hover:text-[#9f0712] cursor-pointer"
        >
          {" "}
          <p>
            {" "}
            <AddIcon /> Ajouter
          </p>{" "}
        </NavLink>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#9f0712] uppercase bg-[#fef2f2] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">Voir</div>
            </th>

            <th scope="col" className="px-6 py-3">
              rating
            </th>

            <th scope="col" className="px-6 py-3">
              commentaire
            </th>
            <th scope="col" className="px-6 py-3">
              Utilisateur
            </th>

            <th scope="col" className="px-6 py-3">
              Pièce
            </th>

            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {avis &&
            avis.map((avis, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <NavLink to={`/admin/gestion/avis/show/${avis.id}`}>
                        {" "}
                        <VisibilityIcon />{" "}
                      </NavLink>
                    </div>
                  </td>

                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {avis.rating || "N/A"}
                  </td>

                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {avis.commentaire || "N/A"}
                  </td>

                  {avis.user && (
                    <td className="px-6 py-4">
                      {avis.user.username || "N/A"}
                    </td>
                  )}

                  {avis.piece && (
                    <td className="px-6 py-4">{avis.piece.name || "N/A"}</td>
                  )}

                
                  <td className="px-6 py-4">
                    {new Date(avis.createdAt).toLocaleDateString() || "N/A"}
                  </td> 


                  <td className="px-6 py-4">
                    <NavLink onClick={() => handleDeleteAvisAdmin(avis.id)}>
                      <HighlightOffIcon className="cursor-pointer mr-3 " />
                    </NavLink>

                    <NavLink to={`/admin/gestion/piece/edit/${avis.id}`}>
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
export default GestionAvisAdmin;
