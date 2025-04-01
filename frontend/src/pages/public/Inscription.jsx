import { Box, Button, TextField } from "@mui/material"
import Header from "@c_public/Header"
import { Link } from "react-router-dom"
import { UtopidButton } from "@style/StyledComponents"
import SwitchFormHeader from "../../component/public/SwitchFormHeader"





const Inscription = () => {



    return (

        <Header>

          

             


                <Box  className="flex flex-col"
                component="form"
                sx={{
                    '& > :not(style)' : { m: 2, width: '37ch' },
                }}

    
                >
                    


                    <TextField 
                    id="outlined-basic"
                    label="Pseudo"
                    type="text"
                    variant="outlined"
                    
                    /> 
               
                    <TextField 
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    
                    /> 

                    <TextField 
                    id="outlined-password-input"
                    label="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    
                    /> 
                
                    
                  
                    <button className="bg-dark-utopid text-light-utopid p-3 hover:bg-light-utopid hover:cursor-pointer font-utopid font-bold"  type="submit" color="success">S'inscrire</button>

                </Box>
                    <SwitchFormHeader>
                    <p className="font-utopid">Vous avez déja un compte ? <Link to="/">  <span className="font-bold">Connectez vous</span> </Link></p>
                    </SwitchFormHeader>
          



        </Header>

    )
}


export default Inscription