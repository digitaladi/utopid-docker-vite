import { Route, Routes } from "react-router-dom";
import PublicLayout from "@p_public/PublicLayout";
import Connexion from "@p_public/Connexion";
import Inscription from "@p_public/Inscription";
import Unauthorized from "@p_public/Unauthorized";
import NoPage from "@utils/NoPage";
import Home from "./Home";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NoPage />} />
      </Route>

      <Route path="/signin" element={<Connexion />} />
      <Route path="/signup" element={<Inscription />} />
    </Routes>
  );
};

export default PublicRouter;
