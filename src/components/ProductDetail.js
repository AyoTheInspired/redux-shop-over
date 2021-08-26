import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function ProductDetail() {
	const { productId } = useParams();
	const dispatch = useDispatch();

	console.log(productId);

	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/prooducts/${productId}`)
			.catch((err) => {
				console.log(err);
			});
		dispatch();
	};

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
