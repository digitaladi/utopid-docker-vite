import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Header from "@c_public/Header";
import { Link } from "react-router-dom";
import { UtopidButton } from "@style/StyledComponents";
import SwitchFormHeader from "../../component/public/SwitchFormHeader";
import { useState, useEffect } from "react";
import Axios from "@/baseUrl";

const Inscription = () => {
  //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    firtsname: "",
    lastname: "",
    password: "",
  });

  const handleSubmit = (e) => {};

  useEffect(() => {}, []);

  return (
    <Header>
      {/* 
      <Box
        className="flex flex-col"
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "37ch" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Pseudo"
          type="text"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
        />

        <TextField
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
        />

        <FormControlLabel
          className="text-sm"
          control={<Checkbox defaultChecked />}
          label="J'accepte les termes et conditions"
        />

        <button
          className="bg-dark-utopid text-light-utopid p-3 hover:bg-light-utopid   hover:text-dark-utopid hover:cursor-pointer font-utopid font-bold mt-0"
          type="submit"
          color="success"
        >
          S'inscrire
        </button>
      </Box>

*/}



<form class="px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="appearance-none border border-gray-400  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="appearance-none border border-gray-400  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
            />
           {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>




      <SwitchFormHeader>

        <p className="font-utopid">
          Vous avez déja un compte ?{" "}
          <Link to="/">
            {" "}
            <span className="font-bold">Connectez vous</span>{" "}
          </Link>
        </p>
      </SwitchFormHeader>
    </Header>
  );
};

export default Inscription;
