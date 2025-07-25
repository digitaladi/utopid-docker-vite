import { Route, Routes } from "react-router-dom";
import PublicLayout from "@p_public/PublicLayout";
import Connexion from "@p_public/Connexion";
import Inscription from "@p_public/Inscription";
import Unauthorized from "@p_public/Unauthorized";
import NotFound from "@utils/NotFound";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/signin" element={<Connexion />} />
      <Route path="/signup" element={<Inscription />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default PublicRouter;
