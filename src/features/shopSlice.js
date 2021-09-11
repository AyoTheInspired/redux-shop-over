import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	activeCategory: "all",
	selectedProduct: [],
	cart: [],
	isLoading: false,
	itemAdded: false,
	isError: false,
	errorMsg: "",
};

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			return { ...state, isLoading: false, products: action.payload };
		},

		setActiveCategory: (state, action) => {
			return {
				...state,
				activeCategory: action.payload,
			};
		},

		selectedProduct: (state, action) => {
			return { ...state, selectedProduct: action.payload };
		},
		// Remove previous product before displaying new one on request
		removeSelectedProduct: (state) => {
			return { ...state, selectedProduct: [] };
		},

		requestProcessing: (state) => {
			return { ...state, isLoading: true };
		},

		requestFailure: (state, action) => {
			return {
				...state,
				isError: true,
				isLoading: false,
				errorMsg: action.payload,
			};
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
				cart: state.cart.filter((item) => {
					return item.id !== action.payload;
				}),
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
			const payloadItem = action.payload;
			const filteredProducts = state.cart;

			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
				),
			};
		},

		toggleCategory: (state, action) => {
			return {
				...state,
				products: action.payload,
			};
		},
	},
});

export const {
	setProducts,
	setActiveCategory,
	requestFailure,
	requestProcessing,
	selectedProduct,
	removeSelectedProduct,
	addToCart,
	removeFromCart,
	clearCart,
	retrieveItems,
	increaseQuantity,
	decreaseQuantity,
	closeToast,
	toggleCategory,
} = shopSlice.actions;

// export const selectState = (state) => state.shop;

export const selectProducts = (state) => state.shop.products;

// export const selectActiveCategory = (state) => state.shop

export const selectSelectedProduct = (state) => state.shop.selectedProduct;

export const selectCart = (state) => state.shop.cart;

export const selectShop = (state) => state.shop;

export const selectItemAdded = (state) => state.shop.itemAdded;

export default shopSlice.reducer;
