import * as React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import { PersonOutline, ShoppingBagOutlined,SearchOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';


export const NavbarListDrawer = () => {

    const navigate = useNavigate();

  return (
    <Box sx={{width: 250}}>
        <nav>
        <List>
          <ListItem >
            <ListItemButton>
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
