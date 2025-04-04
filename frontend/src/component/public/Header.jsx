
import NavBarPublic from "@c_public/NavBarPublic"







const Header = ({ children }) =>{


    return (

        <div className="wrap_header   flex-col" >
            <NavBarPublic />
        <div className="header_2 flex flex-col justify-center items-center  w-[70%] m-auto pt-15">

            <div className="accroche_title text-4xl font-utopid text-dark-utopid pb-15">

     
                <h2>Donner vie à votre plante ! </h2>   
            </div>

            <div className="bg-[url('./images/article1.jpg')] bg-cover w-[100%]  bg-no-repeat h-[65vh] bg-bottom flex flex-row justify-end">
            <div className="wrap_form_user  bg-light-utopid w-max h-[100%] p-5 border-l border-dashed border-gray-500 flex flex-col justify-between">
                {children}
                </div>
            </div>

        </div>
        </div>
    )


}


export default Header