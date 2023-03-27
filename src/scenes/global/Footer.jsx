import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Divider, IconButton, InputAdornment, TextField } from '@mui/material';
import { Call, Email, FacebookOutlined, Send, WhatsApp } from '@mui/icons-material';

function Copyright() {
  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between' flexWrap='wrap' >
      <Typography variant="body2" color="text.secondary" textAlign='center' mt={4}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Artesanias Mixtepec™
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'} Todos los derechos reservados.
      </Typography>
      <img style={{ width: '200px' ,marginTop:'10px'}} src={require("../../assets/footer/footer.png")} alt='Metodos pago'  />
     </Box>
  );
}

const Footer = () => {
  return (
    <Box
        component="footer"
        sx={{
          py: 4,
          px: 8,
          
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <CssBaseline />
        <Box  display='flex' flexDirection='column' mt={3} mb={2}>
          <Typography variant='h3' fontWeight='bold' textAlign='center' >NEWSLETTER</Typography>
          <Box display='flex' flexDirection='row' component='form' autoComplete='off' justifyContent='center' padding={3} gap={3} flexWrap='wrap'>
            <Typography mt={1} mr={3}> Subscribete para recibir las últimas noticias sobre nuestros productos </Typography>
            
            <TextField sx={{width: '350px'}} size='small' placeholder='Correo elctrónico' type='email' InputProps={{
                                            endAdornment: <InputAdornment position="start"> <IconButton
                                            type='submit'
                                            edge='end'
                                            >
                                            <Send />
                                        </IconButton> </InputAdornment>,
                                          }} />
          </Box>
          
          <Box mt={3} display='flex' flexWrap='wrap' gap={5} flexDirection='row' justifyContent='space-around'>
            <Box>
              <Typography variant="h4" fontWeight='bold'>
                Sobre Nosotros
              </Typography>
              <Typography variant='caption' >
               Dolore non duis non quis tempor cupidatat sit laborum do ex adipisicing  <br />
               exercitation aliquip. Sint ad tempor esse aliquip in irure ad qui qui <br />
               reprehenderit sit exercitation do exercitation. Deserunt esse consequat  <br />
               sint cupidatat. Consectetur adipisicing Lorem velit magna dolore. <br/>
               
               
              
               </Typography>

            </Box>
           

            <Box sx={{cursor:'pointer'}} gap={3}>
              <Typography variant='h4' fontWeight='bold'> Acerca de</Typography>
              <Typography variant="body1" >
                  Políticas de privacidad
                </Typography>
                <Typography variant="body1" >
                  Licencia 
                </Typography>

            </Box>

            <Box>
            <Typography variant='h4' fontWeight='bold'> Servicios</Typography>
              <Typography variant="body1" >
                  Ayuda
                </Typography>
                <Typography variant="body1" >
                  Envíos
                </Typography>
            </Box>
            <Box gap={3} >
              <Typography variant="h4" fontWeight='bold'>
                Contacto
              </Typography>
            
              <IconButton >
                <FacebookOutlined /> 
                
              </IconButton>
              <IconButton href='https://wa.me/527351234567' target='blank' rel="noopener noreferrer">
                <WhatsApp /> 
              </IconButton>
              <IconButton href='mailto:cuenta@gmail.com' target='blank' rel="noopener noreferrer">
                <Email />
              </IconButton>
              <IconButton>
                <Call />
              </IconButton>

            </Box>
          </Box>
            
           

        </Box>
          
          <Divider />
          <Copyright />
        

      </Box>
    
  );
}
export default Footer;