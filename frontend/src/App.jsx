//import '@style/public.css';
//import '@style/profile.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@p_public/PublicRouter";
import "@/index.css";
//import '/src/index.css'
import { Toaster } from "react-hot-toast";
import ProfileRouter from "@p_profile/ProfileRouter";
import AdminRouter from "@p_admin/AdminRouter";
import { AuthRequired, AuthRequiredAdmin } from "@/_helpers/AuthRequired";

//ROUTE FAIRE DE DASHBOARD
//https://www.youtube.com/watch?v=ibOz6Lz40xU&list=PLwP3cL-MKVkNM28X96Dhc3BLMhtUktiik&index=1
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          <Route
            path="/dashboard/*"
            element={
              <AuthRequired>
                <ProfileRouter />
              </AuthRequired>
            }
          />
          <Route
            path="/admin/*"
            element={
              <AuthRequiredAdmin>
                <AdminRouter />
              </AuthRequiredAdmin>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* ce modale sera accessible parout sur utopid. il suffit d'utiliser le composant toast dans n'importe quel parti de l'application
      ex:  toast.succes("votre message") ou toast.error("votre message")
      */}
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#16A34A",
            },
            duration: 6000,

            style: {
              minWidth: "400px",
              fontSize: "18px",
              padding: "16px",
              fontWeight: "normal",
              background: "#BBF7D0",
              color: "#3A6534",
              borderRadius: "0",
            },
          },

          error: {
            iconTheme: {
              primary: "#DC2626",
            },
            duration: 6000,
            className: "",
            style: {
              minWidth: "400px",
              fontSize: "18px",
              padding: "16px",
              background: "#FECACA",
              color: "#991B1B",
              borderRadius: "0",
            },
          },
        }}
      />
    </>
  );
}

export default App;
