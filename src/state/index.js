import { createSlice } from "@reduxjs/toolkit";

/* Estado inicial con el que la plataforma empieza */
const initialState = {
    isCartOpen: false, //carrito de compra no ha sido abierto
    cart: [],   //carrito de compras vacio
    items: [],  //cero productos seleccionados
}

//acciones para el carrito de compras 
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item ]
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increseCount: (state, action) => {
            state.cart = state.map((item) => {
                if (item.id === action.payload.id){
                    item.count++;
                }
                return item;
            })
        },
        
        decreaseCount: (state, action) => {
            state.cart = state.map((item) => {
                if (item.id === action.payload.id && item.count > 1){
                    item.count--;
                }
                return item;
            })
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const {
    setItems,
    addToCart,
    decreaseCount,
    increseCount, 
    removeFromCart, 
    setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;