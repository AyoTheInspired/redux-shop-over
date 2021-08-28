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
			const item = state.products.find(
				(product) => product.id === action.payload.id
			);
			// Item already in cart ? ADJ_QTY : ADD
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);

			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { ...item, qty: 1 }],
			};
		},

		removeFromCart: (state, action) => {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		},

		adjustQuantity: (state, action) => {
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === item.payload.id
						? { ...item, qty: action.payload.qty }
						: item
				),
			};
		},
	},
});

export const {
	setProducts,
	selectedProduct,
	removeSelectedProduct,
	addToCart,
	removeFromCart,
} = shopSlice.actions;

// export const selectState = (state) => state.shop;

export const selectSetProducts = (state) => state.shop.products;

export const selectSelectedProduct = (state) => state.shop.selectedProduct;

export const selectCart = (state) => state.shop.cart;

export default shopSlice.reducer;
