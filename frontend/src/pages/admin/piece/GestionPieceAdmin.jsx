import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { NavLink } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
//import countryService from "@services/country.service";
import pieceService from "@services/piece.service";
import toast from "react-hot-toast";
import toasterCustum from "@utils/ToasterCustom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const GestionPieceAdmin = () => {
  const [pieces, setPieces] = useState([]);
  const [loading, setLoading] = useState(false);

  //initiation de la pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalItems: 0,
    totalPages: 1,
  });
  //suppression d'un utilisateur
  const handleDeletePieceAdmin = (id) => {
    if (window.confirm("Voulez vous supprimer ce pays")) {
      pieceService.deletePieceAdmin(id).then((res) => {
        //console.log(res.data.message);
        setPieces(pieces.filter((piece) => piece.id !== id));
        toasterCustum.warning(res.data.message);
      });
    }
  };

  const fetchPieces = async () => {
    setLoading(true);
    pieceService
      .getPiecesAdmin(pagination.page, pagination.limit)
      .then((response) => {
        console.log(response.data);
        setPieces(response.data.pieces);

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
    fetchPieces();
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
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-[#006045] focus:border-[#006045] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006045] dark:focus:border-[#006045]"
                placeholder="Rechercher..."
                required
              />
            </div>
          </form>
        </div>

        <NavLink
          to="/admin/gestion/piece/add"
          className="bg-[#006045]  border-1 border-[#006045] p-2 font-bold text-[#ecfdf5]  hover:bg-[#ecfdf5] hover:text-[#006045] cursor-pointer"
        >
          {" "}
          <p>
            {" "}
            <AddIcon /> Ajouter
          </p>{" "}
        </NavLink>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#006045] uppercase bg-[#ecfdf5] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">Voir</div>
            </th>

            <th scope="col" className="px-6 py-3">
              Photo d'identité
            </th>

            <th scope="col" className="px-6 py-3">
              Nom
            </th>

            <th scope="col" className="px-6 py-3">
              Pseudo
            </th>
            <th scope="col" className="px-6 py-3">
              Utilisateur
            </th>

            <th scope="col" className="px-6 py-3">
              Pays
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {pieces &&
            pieces.map((piece, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <NavLink to={`/admin/gestion/piece/show/${piece.id}`}>
                        {" "}
                        <VisibilityIcon />{" "}
                      </NavLink>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {" "}
                    <img
                      className=" w-12 h-8 "
                      src={`http://localhost:4000/uploads/pieces/${piece.image}`}
                      alt="image description"
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {piece.name || "N/A"}
                  </td>

                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {piece.name_scientist || "N/A"}
                  </td>

                

                  {piece.user && (
                    <td className="px-6 py-4">
                      {piece.user.username || "N/A"}
                    </td>
                  )}

                                      {piece.user && (
                    <td className="px-6 py-4">
                      {piece.country.name || "N/A"}
                    </td>
                  )}

                  {/* 
                  <td className="px-6 py-4">
                    {new Date(country.createdAt).toLocaleDateString() || "N/A"}
                  </td> 
*/}

                  <td className="px-6 py-4">
                    <NavLink onClick={() => handleDeletePieceAdmin(piece.id)}>
                      <HighlightOffIcon className="cursor-pointer mr-3 " />
                    </NavLink>

                    <NavLink to={`/admin/gestion/piece/edit/${piece.id}`}>
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
export default GestionPieceAdmin;
