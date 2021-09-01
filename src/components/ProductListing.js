import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, setProducts } from "../features/shopSlice";
import ProductComponent from "./Product";
import styled from "styled-components";
import axios from "axios";

const ProductListing = () => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				alert(err);
			});

		dispatch(setProducts(response?.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<Container>
			{/* {cart.length !== 0 ? <ProductComponent /> : <h3>Loading ...</h3>} */}
			<ProductComponent />
		</Container>
	);
};

export default ProductListing;

const Container = styled.div`
	min-height: calc(100vh - 49px);
`;
