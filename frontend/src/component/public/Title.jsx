import { Link } from "react-router-dom"



const Title = () =>{
    return (
        <div className="title">
           <Link style={{textDecoration:"none", color:"#12372A"}} to={"/"}  alt="logo du site" >  <h1>UtopId</h1>  </Link>

        </div>
    )
}


export default Title