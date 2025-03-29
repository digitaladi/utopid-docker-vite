import { Box, TextField } from '@mui/material';
import React from 'react';
import { UtopidButton } from '@style/StyledComponents';

const AddPiece = () => {
    return (
        <div>




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


<input 

type='file'
/>
                    
                    <br />
                    <TextField 
                    id="outlined-password-input"
                    label="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    
                    /> 
                
                    
                    <br />
                    <UtopidButton  type="submit" color="success">Créer</UtopidButton>

                </Box>
            
        </div>
    );
};

export default AddPiece;