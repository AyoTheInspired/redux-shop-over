import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	selectedProduct: "",
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
		},

		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { setProducts, selectedProduct } = shopSlice.actions;

export const selectState = (state) => state.shop;

export const selectSetProducts = (state) => state.shop.products;

// export const selectSelectedProduct = (state) => state.shop.selectedProduct;

export default shopSlice.reducer;
