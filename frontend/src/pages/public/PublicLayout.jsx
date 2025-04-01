import { Outlet } from "react-router-dom"






const PublicLayout = () => {

    return (

        <div className="layout_public bg-gray-100 h-[100vh]"> 
        
        <Outlet />
        </div>
     
    )
}


export default PublicLayout