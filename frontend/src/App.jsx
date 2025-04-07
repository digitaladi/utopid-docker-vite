//import '@style/public.css';
//import '@style/profile.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@p_public/PublicRouter";
import "@/index.css";
//import '/src/index.css'
import ProfileRouter from "@p_profile/ProfileRouter";


//ROUTE FAIRE DE DASHBOARD
//https://www.youtube.com/watch?v=ibOz6Lz40xU&list=PLwP3cL-MKVkNM28X96Dhc3BLMhtUktiik&index=1
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/compte/*" element={<ProfileRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
