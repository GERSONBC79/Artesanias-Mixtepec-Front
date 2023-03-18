import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { shades } from "../Theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";


/* el item viene desde el back  */
const Item = ({item, width}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1); //cueenta para la cantidad de un producto en el carrito
    const [isHover, setIsHover] = useState(false); //hover para el producto
    const {palette: {neutral}, } = useTheme();
    
  /*   const {category, price, name, image} = item.atributes; //atributos de la img jalados desde el back 
    const {
        data: {
            atributes: {
                formats: {
                    medium: { url },  /* forma de acceder a la url de la img jalado desde el back 
                }

            }
        }
    } = image; */

    return (
        <Box width={width}>
            <Box 
                position='relative' 
                onMouseOver={ () => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
            >
                <img 
                    alt="img prueba"
                    width="300px"
                    height="400px"
                    /* src={`http://localhost:1337${url}`} */
                    src={require("../assets/img_prueba.jpg")}
                    /* onClick={() => navigate(`/item/${item.id}`)}  */
                    style={{cursor: 'pointer'}}
                />
                <Box 
                    display={isHover ? "block" : "none"}
                    position='absolute'
                    bottom='10%'
                    left='0'
                    width='100%'
                    padding='0 5%'
                >
                    <Box 
                        display='flex'
                        justifyContent='space-between'
                    >
                        <Box 
                            display='flex'
                            alignItems='center'
                            backgroundColor={shades.neutral[100]}
                            borderRadius='3px'
                        >
                            <IconButton onClick={() => setCount(Math.max(count -1, 1))}> {/* decremeta la cantidad de un producto, no baje de 1 */}
                                <Remove />
                            </IconButton>

                            <Typography color={shades.neutral[100]}>
                               {1}      {/* Numero de productos */}
                            </Typography>

                            <IconButton onClick={() => setCount(Math.max(count + 1))}> {/* aumenta la cantidad de un producto */}
                                <Add />
                            </IconButton>
                        </Box>

                        <Button sx={{backgroundColor: shades.primary[300], color: 'white',
                                '&:hover': {backgroundColor: shades.primary[700]}}}
                            /* onClick={() => {dispatch(addToCart({item: {...item, count}}))}} */ > {/* aumenta el conteo del producto en el carrito */}
                            Agregar al carrito
                        </Button>

                    </Box>

                </Box>
            </Box>
            <Box mt='3px' textAlign="center">
                <Typography variant="subTitle2" color={neutral.dark}>
                    {/* {category} */} 
                    Categoría 
                </Typography>
                <Typography>
                    {/* {name} */}
                    Jarron de barro
                </Typography>
                <Typography fontWeight='bold'>
                   {/*  ${price} */}
                     $199.00 MXN
                </Typography>
            </Box>
        </Box>
    )
}

export default Item;