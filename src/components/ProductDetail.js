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

	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				alert(err);
				console.log(err);
			});
		dispatch(selectedProduct(response.data));
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
