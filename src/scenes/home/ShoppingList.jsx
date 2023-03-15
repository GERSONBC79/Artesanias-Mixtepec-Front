import React, {useEffect, useState} from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery} from "@mui/material";
import Item from "../../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";


const ShoppingList = () => {
    const disptach = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items)
    console.log("ShoppingList ~ items:", items)
    const inNonMobile = useMediaQuery("(min-width: 600px)"); /* si la pantalla e maxor a ese pixelaje, es true   */


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

   /*  async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image", 
            { method: "GET" }
        );
        const itemsJson = await items.json();
        disptach( getItems(itemsJson.data))
    } */

  /*   useEffect(() => {
        getItems();

    }, []) */


    return (
        <Box width="80%" margin="80px auto">
            <Typography variant="h3" textAlign="center" marginBottom="10px">
                Nuestros productos 
            </Typography>

            <Box 
                margin="0 auto" display="grid"
                gridTemplateColumns="repeat(auto-fill, 280px)"
                justifyContent="space-around" rowGap="35px"
                columnGap="2%"
            >
                <Item ></Item>
                <Item ></Item>
                <Item ></Item>
                <Item ></Item>
                <Item ></Item>
                <Item ></Item>
                <Item ></Item>
                <Item ></Item>
            </Box>
        </Box>

    )
}

export default ShoppingList;