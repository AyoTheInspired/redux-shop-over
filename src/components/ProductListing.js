import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	closeToast,
	selectItemAdded,
	setProducts,
} from "../features/shopSlice";
import ProductComponent from "./Product";
import axios from "axios";
import { Container, Row, Toast } from "react-bootstrap";

const ProductListing = () => {
	const dispatch = useDispatch();
	const itemAdded = useSelector(selectItemAdded);
	const [show, setShow] = useState(false);

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

const Section = styled.section``;

const ToastWrapper = styled.div`
	position: sticky;
	top: 30px;
	z-index: 100;
	background: rgba(0, 0, 0, 0.25);
	padding: 10px 0;
`;
