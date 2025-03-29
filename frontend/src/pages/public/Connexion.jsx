import { Box, TextField } from "@mui/material"
import Header from "../../component/public/Header"
import { Link } from "react-router-dom"
import { UtopidButton } from "../../styles/StyledComponents"






const Connexion = () => {



    return (
        

        <Header>
            
            <div className="wrap_form_user">

                <h2>Connexion</h2>


                <Box 
                component="form"
                sx={{
                    '& > :not(style)' : { m: 2, width: '37ch' },
                }}

                style={{height:"370px"}}
                >
                    
                    <TextField 
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    
                    /> 

                    <br />
                    <TextField 
                    id="outlined-password-input"
                    label="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    
                    /> 
                
                    
                    <br />
                    <UtopidButton  type="submit" >Se connecter</UtopidButton>

                </Box>
                <div className="switch_form_header"> 
                    <p>Vous n'avez pas de compte ? <Link to="/inscription">  <span>Inscrivez vous</span> </Link></p>

                </div>


            </div>

        </Header>

    )
}


export default Connexion