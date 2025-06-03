import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { NavLink } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import countryService from "@services/country.service";
import toast from "react-hot-toast";
import toasterCustum from "@utils/ToasterCustom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const GestionCountryAdmin = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  //initiation de la pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalItems: 0,
    totalPages: 1,
  });
  //suppression d'un utilisateur
  const handleDeteleCountryAdmin = (id) => {
    if (window.confirm("Voulez vous supprimer ce pays")) {
      countryService.deleteCountryAdmin(id).then((res) => {
        //console.log(res.data.message);
        setCountries(countries.filter((country) => country.id !== id));
        toasterCustum.warning(res.data.message);
      });
    }
  };

  const fetchCountries = async () => {
    setLoading(true);
    countryService
      .getCountriesAdmin(pagination.page, pagination.limit)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data.countries);

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
    fetchCountries();
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
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-[#8200db] focus:border-[#8200db] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#8200db] dark:focus:border-[#8200db]"
                placeholder="Rechercher..."
                required
              />
            </div>
          </form>
        </div>

        <NavLink
          to="/admin/gestion/country/add"
          className="bg-[#8200db]  border-1 border-[#8200db] p-2 font-bold text-[#fefce8]  hover:bg-[#f5f3ff] hover:text-[#8200db] cursor-pointer"
        >
          {" "}
          <p>
            {" "}
            <AddIcon /> Ajouter
          </p>{" "}
        </NavLink>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#8200db] uppercase bg-[#f5f3ff] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">Voir</div>
            </th>

            <th scope="col" className="px-6 py-3">
              drapeau
            </th>

            <th scope="col" className="px-6 py-3">
              Nom
            </th>

            <th scope="col" className="px-6 py-3">
              Type de plante
            </th>
            <th scope="col" className="px-6 py-3">
              president
            </th>
            {/* 
            <th scope="col" className="px-6 py-3">
              Crée le
            </th>
            */}
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {countries &&
            countries.map((country, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <NavLink to={`/admin/gestion/country/show/${country.id}`}>
                        {" "}
                        <VisibilityIcon />{" "}
                      </NavLink>
                    </div>
                  </td> 

                  <td className="px-6 py-4">
                    {" "}
                    <img
                      className=" w-10 h-8"
                      src={`http://localhost:4000/uploads/flags/${country.flag}`}
                      alt="image description"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {country.name || "N/A"}
                  </th>

                  <td className="px-6 py-4">{country.typePlante || "N/A"}</td>

                  {country.president && (
                    <td className="px-6 py-4">
                      {country.president.name || "N/A"}
                    </td>
                  )}
                  {/* 
                  <td className="px-6 py-4">
                    {new Date(country.createdAt).toLocaleDateString() || "N/A"}
                  </td> 
*/}
                  <td className="px-6 py-4">
                    <NavLink
                      onClick={() => handleDeteleCountryAdmin(country.id)}
                    >
                      <HighlightOffIcon className="cursor-pointer mr-3 " />
                    </NavLink>

                    <NavLink to={`/admin/gestion/country/edit/${country.id}`}>
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
export default GestionCountryAdmin;
