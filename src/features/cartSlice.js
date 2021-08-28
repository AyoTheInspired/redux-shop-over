import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [], // {id, title, description, price, img, qty}
};

export const cartSlice = createSlice({
	name: "cart",

	initialState,

	reducers: {
		addToCart: (state, action) => {
			// Get item's data from products array
			// Item already in cart ? ADJ_QTY : ADD
			return { ...state, cartItems: [...cartItems, { ...item, qty: 1 }] };
		},

		removeFromCart: (state, action) => {},

		increaseQuantity: (state, action) => {},

		decreaseQuantity: (state, action) => {},
	},
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
