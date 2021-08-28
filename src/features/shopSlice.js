import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	selectedProduct: [],
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

		removeSelectedProduct: (state) => {
			return { ...state, selectedProduct: [] };
		},
	},
});

export const { setProducts, selectedProduct, removeSelectedProduct } =
	shopSlice.actions;

export const selectState = (state) => state.shop;

export const selectSetProducts = (state) => state.shop.products;

export const selectSelectedProduct = (state) => state.shop.selectedProduct;

export default shopSlice.reducer;
