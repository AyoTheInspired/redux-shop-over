import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	selectedProduct: [],
	cart: [],
	isLoading: false,
	itemAdded: false,
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

		closeToast: (state) => {
			return { ...state, itemAdded: false };
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
				itemAdded: true,
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
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		},

		retrieveItems: (state, action) => {
			return {
				...state,
				cart: [...state.cart, ...action.payload],
			};
		},

		increaseQuantity: (state, action) => {
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
				),
			};
		},

		decreaseQuantity: (state, action) => {
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
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
	retrieveItems,
	increaseQuantity,
	decreaseQuantity,
	closeToast,
} = shopSlice.actions;

// export const selectState = (state) => state.shop;

export const selectSetProducts = (state) => state.shop.products;

export const selectSelectedProduct = (state) => state.shop.selectedProduct;

export const selectCart = (state) => state.shop.cart;

export const selectItemAdded = (state) => state.shop.itemAdded;

export default shopSlice.reducer;
