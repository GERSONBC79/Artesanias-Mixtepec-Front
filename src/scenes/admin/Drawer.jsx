import { Add, Category, FormatListNumbered, GridViewOutlined, Person } from '@mui/icons-material'
import { AppBar, CssBaseline, Toolbar, Typography, Drawer as Dw, Divider, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const Drawer = (props) => {
    
  return (
   <Box>
        <Toolbar />
        <Divider />
        <List>
            <ListItem >
                <ListItemButton>
                    <ListItemIcon>
                       <GridViewOutlined /> 
                    </ListItemIcon>
                    <Typography variant='body1'> Panel principal </Typography>
                </ListItemButton>
            </ListItem>


            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                       <Person/> 
                    </ListItemIcon>
                    <Typography variant='body1'>Lista de usuarios</Typography>
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                       <FormatListNumbered /> 
                    </ListItemIcon>
                    <Typography variant='body1'>Lista de productos</Typography>
                </ListItemButton>
            </ListItem>

            <ListItem >
                <ListItemButton>
                    <ListItemIcon>
                       <Category /> 
                    </ListItemIcon>
                    <Typography variant='body1'> Lista de categorías </Typography>
                </ListItemButton>
            </ListItem>
            

        </List>
    </Box>
  )

}
