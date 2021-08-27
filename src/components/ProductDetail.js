import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { selectedProduct, selectSelectedProduct } from "../features/shopSlice";

function ProductDetail() {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const singleProduct = useSelector(selectSelectedProduct);

	console.log(productId);

	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log(err);
			});
		dispatch(selectedProduct(response.data));
		console.log(singleProduct);
	};

	useEffect(() => {
		fetchProductDetail();
	}, [productId]);

	return (
		<Container>
			<Row>
				<Section>
					<h1>Product Detail</h1>
				</Section>
			</Row>
		</Container>
	);
}

export default ProductDetail;

const Section = styled.section``;
