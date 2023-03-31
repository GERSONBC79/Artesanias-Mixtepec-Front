import { Box, Button, Divider, IconButton, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades } from '../../Theme';
import { decreaseCount, increseCount, removeFromCart, setIsCartOpen } from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartMenu = () => {
    //acciones  o funciones para el carrito de compras
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;   /* attributos de producto jalados desde el backend */
    }, 0);


    return (
        <Box display={isCartOpen ? 'block' : 'none'}   //contenedor del modal del carrito de compras 
            backgroundColor="rgba(0, 0, 0, 0.4)"
            position='fixed' zIndex={10} width='100%' height="100%" left='0' top='0'
            overflow='auto'>

            <Box position='fixed' right='0' bottom='0'
                width='max(400px, 30%)' height='100%'
                backgroundColor='white'> {/* modal */}

                <Box padding='30px' overflow='auto' height='100%'> {/* Contenido del modal  */}

                    <Box> {/* Header */}
                        <FlexBox mb='15px'>
                            <Typography variant="h3" > Carrito de Compras ({cart.length})</Typography>
                            <IconButton onClick={() => dispatch(setIsCartOpen({}))}> {/* boton que abre/cierra el carrito */}
                                <CloseIcon />
                            </IconButton>
                        </FlexBox>
                    </Box>

                    {/* Lista de compras */}
                    <Box>
                        {cart.map((item) => (
                            <Box key={`${item.attributes.name}-${item.id}`}>
                                <FlexBox p='15px 0'>
                                    <Box flex='1 1 40%'>
                                        <img alt={item?.name}
                                            width='123px' height='164px'
                                            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} /> {/* direccion del back-kend */}
                                    </Box>
                                    <Box flex='1 1 60%'>

                                        <FlexBox mb='5px'>
                                            <Typography fontWeight='bold'>
                                                {item.attributes.name} {/* nombre del producto */}
                                            </Typography>

                                            <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}> {/* elimina del carrito un producto */}
                                                <CloseIcon />
                                            </IconButton>
                                        </FlexBox>

                                        <Typography> {/* Descripcion del producto */}
                                            {item.attributes.shortDescription}
                                        </Typography>


                                        <FlexBox m='15px 0'>
                                            
                                            <Box display='flex' alignItems='center'
                                                border={`1.5px solid ${shades.neutral[500]}`} >

                                                <IconButton onClick={() => dispatch(decreaseCount({ id: item.id }))}> {/* decremeta la cantidad de un producto */}
                                                    <RemoveIcon />
                                                </IconButton>

                                                <Typography>
                                                    {item.count}        {/* Numero de productos */}
                                                </Typography>

                                                <IconButton onClick={() => dispatch(increseCount({ id: item.id }))}> {/* aumenta la cantidad de un producto */}
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>

                                            <Typography fontWeight='bold'>
                                                {item.attributes.price}        {/* precio de  un productos */}
                                            </Typography>
                                        </FlexBox>
                                    
                                    </Box>
                                </FlexBox>
                                <Divider />
                            </Box>
                        ))}
                    </Box>
                    
                    <Box m='20px 0'>
                        <FlexBox m='20px 0'>
                            <Typography fontWeight='bold'> SUBTOTAL</Typography>
                            <Typography fontWeight='bold'> ${totalPrice}</Typography>
                        </FlexBox>
                        <Button sx={{backgroundColor: shades.primary[400],
                        color: "white", borderRadius: "5px", minWidth: "100%", 
                        padding: "20px 40px", m: "20px 0", '&:hover': {backgroundColor: shades.primary[700]}  }} 
                        onClick={() => { 
                            navigate("/checkout");          /* redirecciona a la pagina de pago */
                            dispatch(setIsCartOpen({}))}}   /* cierra el carrito de compras  */
                        > PAGAR</Button>
                    </Box>
                </Box>

            </Box>

        </Box>
    );
};

export default CartMenu;
