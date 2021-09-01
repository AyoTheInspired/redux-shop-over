import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectItemAdded, setProducts } from "../features/shopSlice";
import ProductComponent from "./Product";
import axios from "axios";

const ProductListing = () => {
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				alert("Err", err);
			});

		dispatch(setProducts(response?.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<>
			<ProductComponent />
		</>
	);
};

export default ProductListing;
