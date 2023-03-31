import {  Add, CloseOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Box, CssBaseline, Toolbar, Drawer as Dw, Typography, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import { Drawer } from './Drawer'
import { FormUser } from './Forms/FormUser'
import { Users } from './Users'

export const Main = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 240;

    const container = window !== undefined ? () => window().document.body : undefined;

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

  return (
    <div >
        <Box sx={{dispplay: 'flex'}}  >
            <CssBaseline />
            <AppBar  color='inherit' position='fixed' sx={{ marginTop: '65px' ,width: { sm: `calc(100% - ${drawerWidth}px)` }, 
                    ml:{ sm:`${drawerWidth}px` }}}>
                <Toolbar>
                    <IconButton color='inherit' edge='start' onClick={handleDrawerToggle} sx={{mr: 1, display: {sm: 'none'}}}>
                        <MenuOutlined fontSize='large'  />
                    </IconButton>
                    <Typography ml={1} variant='h6' fontWeight='bold' noWrap component='div'>
                        Panel de administración 
                    </Typography>
                    <IconButton onClick={handleOpenModal} sx={{left:{ xs: '40%', sm: '40%' , md: '65%', lg: '75%'} }}>
                        <Add />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            <Box component='nav' sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                
                <Dw container={container} variant='temporary' open={mobileOpen}
                    onClose={handleDrawerToggle} ModalProps={{ keepMounted: true}}
                    sx={{display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
                >
                    <Drawer/>
                </Dw> {/* drawer para moviles */}

                <Dw variant='permanent' sx={{ display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }} open
                     >
                    <Drawer />
                </Dw>

            </Box>
                <Box component='main' sx={{ p: 1, ml: {xs: '25px', sm: '250px'}, width: { xs: '100%', sm: '65%', md: '80%', lg: '80%'}}}>
                    <Toolbar />
                    <Users />
                    <Modal open={openModal} onClose={handleCloseModal}>
                       <>
                       {/* <IconButton  onClick={handleCloseModal} size='large' sx={{zIndex: 2, left: {xs: '72%', sm:'82%', md: '35%', lg: '63%'}, top: '15%'}} >
                            <CloseOutlined  color='warning'/>
                        </IconButton> */}
                        <FormUser />
                       </>
                    </Modal>
                </Box>

        </Box>
    </div>
  )
}
