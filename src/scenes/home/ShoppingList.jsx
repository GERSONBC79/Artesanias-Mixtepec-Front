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

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image", /* toma las los productos con las imagenes  */
            { method: "GET" }
        );
        const itemsJson = await items.json();
        disptach( getItems(itemsJson.data))
    }

    useEffect(() => {
        getItems();

    }, [])

    return (
        <div>Shopping</div>
    )
}

export default ShoppingList;