import { Outlet } from "react-router-dom"
import Footer from "@c_public/Footer"






const PublicLayout = () => {

    return (
<>
        <div className="layout_public bg-gray-100 h-[100vh] flex flex-col justify-between"> 
        
        <Outlet />
        <Footer />
        </div>
       
</>
    )
}


export default PublicLayout