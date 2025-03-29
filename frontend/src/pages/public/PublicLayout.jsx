import { Outlet } from "react-router-dom"






const PublicLayout = () => {

    return (

        <div className="layout_public"> 
        
        <Outlet />
        </div>

    )
}


export default PublicLayout