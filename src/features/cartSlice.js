import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",

	initialState,

	reducers: {
		addToCart: (state, action) => {
			return { ...state, cart: action.payload };
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
