import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Container } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined,SearchOutlined } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { shades } from "../../Theme";
import { setIsCartOpen } from "../../state";

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    return (
      <Box display='flex' alignItems='center' width='100%' height='60px'
            backgroundColor='rgba(255, 255, 255, 0.95)' color= 'black'
            position='fixed' top='0' left='0' zIndex='1'>
            
            <Box width='80%' margin='auto' display='flex' justifyContent='space-between'>
                <Box onClick={() => navigate("/")} sx={{ '&:hover': {cursor: '´pointer'}}} 
                    fontSize='18px' color={shades.secondary[500]} marginTop='6px' letterSpacing='4px'>
                        ARTESANÍAS MIXTEPEC
                </Box>
                <Box display='flex' justifyContent='space-between' 
                    columnGap='20px' zIndex='2'>
                    <IconButton sx={{color: 'black'}}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton sx={{color: 'black'}}>
                        <PersonOutline />
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
                        </IconButton>
                    </Badge>
                    <IconButton sx={{color: 'black'}}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>

      </Box>
    )
}
  
  export default Navbar;