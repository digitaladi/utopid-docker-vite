import { Box, TextField } from "@mui/material"
import Header from "@c_public/Header"
import { Link } from "react-router-dom"
import { UtopidButton } from "@style/StyledComponents"





const Inscription = () => {



    return (

        <Header>

            <div className="wrap_form_user">

                <h2>Inscription</h2>


                <Box 
                component="form"
                sx={{
                    '& > :not(style)' : { m: 2, width: '37ch' },
                }}

                style={{height:"370px"}}
                >
                    


                    <TextField 
                    id="outlined-basic"
                    label="Pseudo"
                    type="text"
                    variant="outlined"
                    
                    /> 
                     <br />
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
                    <UtopidButton  type="submit" color="success">S'inscrire</UtopidButton>

                </Box>
                <div className="switch_form_header"> 
                    <p>Vous avez déja un compte ? <Link to="/">  <span>Connectez vous</span> </Link></p>

                </div>


            </div>

        </Header>

    )
}


export default Inscription