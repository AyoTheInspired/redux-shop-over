import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { selectedProduct, selectSelectedProduct } from "../features/shopSlice";
import LabelIcon from "@material-ui/icons/Label";
import {
	AddShoppingCartRounded,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

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
		dispatch(selectedProduct(response?.data));
	};

	useEffect(() => {
		fetchProductDetail();
	}, [productId]);

	return (
		<Container>
			<Row>
				<Section className="flexed flex-wrap py-5 my-4">
					<Col
						sm={10}
						md={5}
						lg={5}
						className="singleProduct__imgWrap py-2 px-3 d-flex flex-column">
						<img
							src={singleProduct.image}
							// width="300"
							alt={singleProduct.title}
							className="mx-auto m-2 singleProduct__img"
						/>
						<div className="singleProduct__bottom mt-3 col">
							<p className="mb-0 single__product-title">
								{singleProduct.title}{" "}
							</p>

							<p className="mb-0 single__product-price">
								$ {singleProduct.price}
							</p>
						</div>
					</Col>
					<Col
						sm={10}
						md={5}
						lg={5}
						className="singleProduct__details p-2 d-flex flex-column">
						<p className="mb-3 px-3 text-center flexed text-capitalize singleProduct-description">
							{singleProduct.description}{" "}
						</p>

						<div className="flexed singleProduct__bottomRight mx-auto p-2">
							<p className="singleProduct-category mb-0 text-capitalize">
								{singleProduct.category}
							</p>

							<IconButton>
								<AddShoppingCartRounded className="singleProduct__cart" />
							</IconButton>
						</div>
					</Col>
				</Section>
			</Row>
		</Container>
	);
}

export default ProductDetail;

const Section = styled.section`
	/* min-height: calc(100vh - 44px); */
	background: var(--pry-clr-2);
	.singleProduct__imgWrap,
	.singleProduct__details {
		background: #fff;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
	}

	.singleProduct__img {
		width: 70%;

		@media (max-width: 768px) {
			/* width: 50px !important; */
		}
	}

	.singleProduct__bottom {
		background: #ddd;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 5px;

		.single__product-title {
			font-weight: bold;
			font-size: 15px;
		}
	}
	.single__product-price,
	.singleProduct-category {
		background: var(--pry-clr-1);
		padding: 5px 7px;
		color: #fff;
		font-weight: 500;
		border-radius: 4px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
	}

	.singleProduct__details {
		justify-content: space-evenly;
		height: 100%;

		@media (max-width: 450px) {
			height: 50%;
		}

		.singleProduct__bottomRight {
			min-width: 50%;
			background: #ddd;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
		}
		.singleProduct-description {
			/* flex: 1; */
			line-height: 1.5rem;
			font-size: 14px;
		}

		.singleProduct__cart {
			color: var(--pry-clr-1);
			font-size: 20px;
		}
	}
`;
