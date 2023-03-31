import { Send } from '@mui/icons-material'
import { Box, Button, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { shades } from '../../Theme'
import Footer from '../global/Footer'
import image from '../../assets/contacto/soporte.jpg'

export const Contact = () => {
  return (
    <Box>
        <CssBaseline />
        <Box display='flex' flexDirection='column' justifyContent='center' textAlign='center' mt={6} mb={3} style={{ backgroundImage: `url(${image})`, maxWidth: '100%',}} sx={{height: '400px'}}>
            <Typography color='white' variant='h2' sx={{fontWeight: 'bold'}}> ¿Como podemos ayuadarte?</Typography>
            <Typography color='white' variant='h2' > Envíanos un mensaje </Typography>
        </Box>
        

            <Grid container spacing={3}
            maxWidth='55%' 
            margin='0 auto' component='form' sx={{marginBottom: '100px'}}> 

                <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
                    <Typography textAlign='center' variant='h5' >Formulario de contacto</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} >
                  
                    <TextField  fullWidth label='Nombre' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField fullWidth label='Apellidos' />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField fullWidth label='Correo ' />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField fullWidth multiline rows={6} label='Mensaje ' />
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
                    <Button variant='contained' sx={{width: '80%', ml: '11%', backgroundColor: shades.primary[400], '&:hover': {backgroundColor: shades.primary[700]} } } type='submit' endIcon={<Send />}  size='medium'>
                        Enviar
                    </Button>
                </Grid>


            </Grid>

           <Footer />
    </Box>
  )
}
