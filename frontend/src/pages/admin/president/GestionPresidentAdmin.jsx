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
import presidentService from "@services/president.service";

const GestionPresidentAdmin = () => {
    const [loading, setLoading] = useState(false);
  const [presidents, setPresidents] = useState([]);
  //initiation de la pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalItems: 0,
    totalPages: 1,
  });



function tronquerTexte(texte) {
  return texte.length > 30 ? texte.slice(0, 30) + "..." : texte;
}


  //suppression d'un president
  const handleDeletePresidentAdmin = (id) => {
    if (window.confirm("Voulez vous supprimer ce pays")) {
      presidentService.deletePresidentAdmin(id).then((res) => {
        //console.log(res.data.message);
        setPresidents(presidents.filter((user) => user.id !== id));
        toasterCustum.warning(res.data.message);
      });
    }
  };


//récuperer tous les présidents par la pagination
  const fetchPresidents = async () => {
    setLoading(true);
    
      presidentService.getPresidentsAdmin(pagination.page, pagination.limit)
      .then((response) => {
        console.log(response.data);
        setPresidents(response.data.presidents);

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
      fetchPresidents();
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
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-[#00598a] focus:border-[#00598a] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00598a] dark:focus:border-[#00598a]"
                placeholder="Rechercher..."
                required
              />
            </div>
          </form>
        </div>

        <NavLink
          to="/admin/gestion/president/add"
          className="bg-[#894b00]  border-1 border-[#894b00] p-2 font-bold text-[#fefce8]  hover:bg-[#fefce8] hover:text-[#894b00] cursor-pointer"
        >
          {" "}
          <p>
            {" "}
            <AddIcon /> Ajouter
          </p>{" "}
        </NavLink>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#894b00] uppercase bg-[#fefce8] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">Voir</div>
            </th>

            <th scope="col" className="px-6 py-3">
              image
            </th>

            <th scope="col" className="px-6 py-3">
              Le pseudo
            </th>
            <th scope="col" className="px-6 py-3">
            Nom
            </th>
            <th scope="col" className="px-6 py-3">
              Descriptif
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
            presidents.map((president, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <NavLink to={`/admin/gestion/president/show/${president.id}`}>
                        {" "}
                        <VisibilityIcon />{" "}
                      </NavLink>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {" "}
                    <img
                      className=" w-8 h-8"
                      src={
                     //   president.image ? 
                         `http://localhost:4000/uploads/presidents/${president.image}`
                        //  : `http://localhost:4000/uploads/defaults/avatar-default.jpg`
                      }
                      alt="image description"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {president.pseudo || "N/A"}
                  </th>

                  <td className="px-6 py-4">{president.name || "N/A"}</td>
                  <td className="px-6 py-4">{tronquerTexte(president.descriptif) || "N/A"}</td>
                  <td className="px-6 py-4">
                    {new Date(president.createdAt).toLocaleDateString() || "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <NavLink onClick={() => handleDeletePresidentAdmin(president.id)}>
                      <HighlightOffIcon className="cursor-pointer mr-3 " />
                    </NavLink>

                    <NavLink to={`/admin/gestion/president/edit/${president.id}`}>
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
