import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	selectedProduct: [],
	cart: [],
};

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			return { ...state, products: action.payload };
		},

		selectedProduct: (state, action) => {
			return { ...state, selectedProduct: action.payload };
			// state.selectedProduct = action.payload;
		},
		// Remove previous product before displaying new one on request
		removeSelectedProduct: (state) => {
			return { ...state, selectedProduct: [] };
		},

		// Cart Actions

		addToCart: (state, action) => {
			// Get item's data from products array
			// Item already in cart ? ADJ_QTY : ADD

			return { ...state, cart: [...cart, {}] };
		},
	},
});

export const { setProducts, selectedProduct, removeSelectedProduct } =
	shopSlice.actions;

// export const selectState = (state) => state.shop;

export const selectSetProducts = (state) => state.shop.products;

export const selectSelectedProduct = (state) => state.shop.selectedProduct;

export default shopSlice.reducer;
