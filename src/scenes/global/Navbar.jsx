import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Container, Typography, Drawer, CssBaseline, AppBar, Toolbar } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined,SearchOutlined, MenuRounded } from "@mui/icons-material";
import {  useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { useState } from "react";
import { NavbarListDrawer } from "./NavbarListDrawer";

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const [open, setOpen] = useState(false);

    return (
      <Box display='flex' >
        <CssBaseline />
        <AppBar component='nav' position="fixed" sx={{backgroundColor: 'white'}}>
            <Toolbar>
                <Box sx={{ '&:hover': {cursor: 'pointer'}, flexGrow: 1}} 
                    >
                        <img onClick={() => navigate("/")} style={{}}  width='250px' src={require("../../assets/logo/logo.png")} alt='Artesanias mixtepec' />
                </Box>
                
                
                <Box display='flex' justifyContent='space-between' 
                    columnGap='20px' zIndex='2'>
                        <Box sx={{ display: {xs: 'none', sm: 'block'} }}>
                            <IconButton sx={{color: 'black'}}>
                                <SearchOutlined /> 
                                <Typography variant="body1" sx={{fontWeight: 'bold'}}> Buscar</Typography> 
                            </IconButton>

                            <IconButton sx={{color: 'black'}} 
                                onClick={() => navigate("/cuenta")}
                            >
                                <PersonOutline /> 
                                <Typography variant="body1" sx={{fontWeight: 'bold'}}> Cuenta </Typography>
                            </IconButton>

                            <Badge badgeContent={cart.lenth} color="secondary"
                                invisible={cart.lenth === 0} 
                                sx={{ '& .MuiBadge-badge': {
                                    right: 5,
                                    top: 5,
                                    padding: '0 4px',
                                    height: '14px',
                                    minWidth: '13px'
                                },
                                }}
                            >
                                <IconButton sx={{color: 'black'}} 
                                onClick={ () => dispatch(setIsCartOpen({}))}>
                                    <ShoppingBagOutlined />
                                    <Typography variant="body1" sx={{fontWeight: 'bold'}}> Carrito </Typography>
                                </IconButton>
                            </Badge>
                        </Box>
                    
                        <Box sx={{ display: {xs: 'block', sm: 'none'} }} >
                            <IconButton sx={{color: 'black'}} 
                                onClick={() => setOpen(true)}  >
                                <MenuRounded />
                                <Typography variant="body1" ml={1} sx={{fontWeight: 'bold'}}> Menú </Typography>
                            </IconButton>
                                
                            <Drawer open={open} anchor="right"  variant="temporary"
                                onClose={() => setOpen(false)} sx={{ display: {xs: 'block', sm: 'none'} }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                  }}>
                                <NavbarListDrawer />
                            </Drawer>
                        </Box>
                    
                </Box>


            </Toolbar>
        </AppBar>
      </Box>
    )
}
  
  export default Navbar;