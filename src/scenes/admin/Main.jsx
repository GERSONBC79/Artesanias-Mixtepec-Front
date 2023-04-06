import {  Add, MenuOutlined } from '@mui/icons-material'
import { AppBar, Box, CssBaseline, Toolbar, Drawer as Dw, Typography, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import { Drawer } from './Drawer'
import { FormUser } from './Forms/FormUser'
import { Users } from './Panels/Users'
import { Products } from './Panels/Products'
import { Category } from './Panels/Category'
import { FormProduct } from './Forms/FormProduct'
import { FormCategory } from './Forms/FormCategory'

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

    const [panel, setPanel] = useState("usuarios");
    const setPanelPrincipal = () => setPanel("principal")
    const setPanelUsuarios = () => setPanel("usuarios")
    const setPanelProductos = () => setPanel("productos")
    const setPanelCategorias = () => setPanel("categorias")

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
                    <IconButton onClick={handleOpenModal} sx={{left:{ xs: '35%', sm: '26%' , md: '60%', lg: '73%'} }}>
                        <Add  />
                        <Typography variant='body1' fontWeight='bold'>Agregar</Typography>
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            <Box component='nav' sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                
                <Dw container={container} variant='temporary' open={mobileOpen}
                    onClose={handleDrawerToggle} ModalProps={{ keepMounted: true}}
                    sx={{display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
                >
                    <Drawer setPanelPrincipal={setPanelPrincipal} setPanelUsuarios={setPanelUsuarios} 
                            setPanelProductos={setPanelProductos} setPanelCategorias={setPanelCategorias}/>
                </Dw> {/* drawer para moviles */}

                <Dw variant='permanent' sx={{ display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }} open
                     >
                    <Drawer setPanelPrincipal={setPanelPrincipal} setPanelUsuarios={setPanelUsuarios} 
                            setPanelProductos={setPanelProductos} setPanelCategorias={setPanelCategorias} />
                </Dw>

            </Box>
                <Box component='main' sx={{ p: 1, ml: {xs: '25px', sm: '250px'}, width: { xs: '100%', sm: '65%', md: '80%', lg: '80%'}}}>
                    <Toolbar />
                    {panel === 'usuarios' && <Users />}
                    {panel === 'productos' && <Products />}
                    {panel === 'categorias' && <Category />}
                    <Modal open={openModal} onClose={handleCloseModal}>
                       <>
                       
                        {panel === 'usuarios' && <FormUser handleCloseModal={handleCloseModal} />}
                        {panel === 'productos' && <FormProduct handleCloseModal={handleCloseModal} />}
                        {panel === 'categorias' && <FormCategory handleCloseModal={handleCloseModal} />}
                       </>
                    </Modal>
                </Box>

        </Box>
    </div>
  )
}
