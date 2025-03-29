import { Route, Routes } from "react-router-dom"
import PublicLayout from "./PublicLayout"
import Connexion from "./Connexion"
import Inscription from "./Inscription"
import Unauthorized from "./Unauthorized"
import NoPage from "../../_utils/NoPage"


const PublicRouter  = () =>{




    return (
        <Routes>

            <Route  element={<PublicLayout />}>
                <Route   index element={<Connexion />} />
                <Route path="/connexion" element={<Connexion />}/>
                <Route path="/inscription" element={<Inscription />}/>
                <Route path="/unauthorized" element={<Unauthorized />}/>
                <Route path="*" element={<NoPage />}/>

            </Route>
            
        </Routes>
    )
}


export default PublicRouter