import * as React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { PersonOutline, ShoppingBagOutlined,SearchOutlined, HomeOutlined, EmailOutlined } from "@mui/icons-material";
import {useNavigate } from 'react-router-dom';


export const NavbarListDrawer = () => {

    const navigate = useNavigate();

  return (
    <Box sx={{width: 230}} mt={7}>
        <nav>
        <List>

        <ListItem >
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <Typography variant="body1" sx={{fontWeight: 'bold'}}> Home </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <SearchOutlined />
              </ListItemIcon>
              <Typography variant="body1" sx={{fontWeight: 'bold'}}> Buscar </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton onClick={() => navigate("/cuenta")}>
              <ListItemIcon  >
                <PersonOutline />
              </ListItemIcon>
              <Typography variant="body1" sx={{fontWeight: 'bold'}}> Cuenta </Typography>
                
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton onClick={() => navigate("/contacto")}>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <Typography variant="body1" sx={{fontWeight: 'bold'}}> Contacto </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBagOutlined />
              </ListItemIcon>
              <Typography variant="body1" sx={{fontWeight: 'bold'}}> Carrito </Typography>
            </ListItemButton>
          </ListItem>

        </List>
        </nav>
    </Box>
  
  
  )
   
  
}
