
import NavBarPublic from "./NavBarPublic"







const Header = ({ children }) =>{


    return (

        <div className="wrap_header">
            <NavBarPublic />
        <div className="header_2">

            <div className="accroche_title">

          {/*  <Title /> */}
                <h2>Donner vie à votre plante ! </h2>
            </div>

            <div>
                {children}
            </div>

        </div>
        </div>
    )


}


export default Header