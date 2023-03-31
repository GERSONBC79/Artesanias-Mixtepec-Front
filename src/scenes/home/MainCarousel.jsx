import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavigateBefore } from "@mui/icons-material";
import { NavigateNext } from "@mui/icons-material";
import { shades } from "../../Theme";

/* importacion de todas las imagenes  */
const importAll = (r) => 
    r.keys().reduce((acc, item) => {
        acc[item.replace("./", "")] = r(item);
        return acc;
    }, {} );

 /* permite manejar todas las importaciones hechas para que el carousel las use  */
const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
    const inNonMobile = useMediaQuery("(min-width: 600px)"); /* si la pantalla e maxor a ese pixelaje, es true   */

    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            transitionTime={2000}
            autoPlay={true}
            interval={7000}
            verticalSwipe={'natural'}
            dynamicHeight={false}
            showIndicators={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                onClick={onClickHandler}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: '0',
                    color: "white",
                    padding: "5px ",
                    zIndex: "10",
                    cursos: 'pointer'
                    }}
                >
                    <NavigateBefore sx={{ fontSize: 40}} />
                </IconButton>
            )}

            renderArrowNext={(onClickHandler, hasPrev, label) => (
                <IconButton
                onClick={onClickHandler}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: '0',
                    color: "white",
                    padding: "5px ",
                    zIndex: "10",
                    }}
                >
                    <NavigateNext sx={{ fontSize: 40}} />
                </IconButton>
            )}
            
        >
            {Object.values(heroTextureImports).map((texture, index) => (
                <Box key={`carousel-image-${index}`}>
                    <img src={texture}
                    alt={`carousel-${index}`}
                    style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        backgroundAttachment: "fixed",
                        marginTop: '60px'
                    } }
                />
                    {/* contenedor del texto que esta dentro del carousel */}
                    <Box color="white" padding="30px"  borderRadius="8px"
                        textAlign="left" backgroundColor="rgba(0, 0, 0, 0.4)"
                        position="absolute" top="20%" 
                        left={inNonMobile ? "10%" : "0"}
                        right={inNonMobile ? undefined : "0"}
                        margin={inNonMobile ? undefined : "250px 50px"}
                        maxWidth={inNonMobile ? undefined : "340px"}
                    >
                        <Typography color={shades.neutral[200]} letterSpacing="3px">
                            NUEVOS PRODUCTOS
                        </Typography>

                        <Typography variant="h1" color={shades.secondary[200]}>
                            Tendencia 
                        </Typography>
                        
                        <Typography fontWeight="bold" color={shades.neutral[300]}
                            
                        >
                            Descubre Más
                        </Typography>

                    </Box>
                </Box>
            ))}
        </Carousel>
    )
}

export default MainCarousel;