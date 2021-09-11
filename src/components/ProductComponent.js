import { AddShoppingCart } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	retrieveItems,
	selectCart,
	selectItemAdded,
	selectProducts,
	closeToast,
	selectShop,
} from "../features/shopSlice";
import { Link } from "react-router-dom";
import { Container, Row, Col, Toast } from "react-bootstrap";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import StarRatingComponent from "react-star-rating-component";
import { addToCart } from "../features/shopSlice";
import FadingCircle from "better-react-spinkit/dist/FadingCircle";
import CartAlert from "./CartAlert";
import SingleProduct from "./SingleProduct";

function ProductComponent() {
	const { activeCategory } = useSelector((state) => state.shop);

	const dispatch = useDispatch();
	const shopState = useSelector(selectShop);
	const cart = useSelector(selectCart);
	const itemAdded = useSelector(selectItemAdded);

	return (
		<Container>
			<Row>
				{itemAdded && <CartAlert />}
				{shopState.isLoading ? (
					<div className="flex-col">
						<FadingCircle size={100} color="#ddd" />
						<h3 className="mt-5 mb-0 py-3 text-white text-center">
							Please Wait
						</h3>
					</div>
				) : shopState.errorMsg ? (
					<h3 className="mb-0 text-white">
						{shopState.errorMsg} ... Please Refresh{" "}
					</h3>
				) : (
					<SingleProduct />
				)}
			</Row>
		</Container>
	);
}

export default ProductComponent;

const Section = styled.section``;

const Wrap = styled.div`
	background: #fff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
	transition: var(--sht-trans);

	:hover {
		transform: scale(1.01);
	}

	.product__image {
		object-fit: contain;
	}

	.product__details {
		.product__title {
			text-overflow: ellipsis;
		}

		.items__cartIcon {
			color: var(--pry-clr-2);
		}

		.product__price {
			color: #000;
			font-weight: bold;
		}

		.star__rating {
			font-size: 15px;
		}

		.product__link {
			text-decoration: none;
		}

		.product__more {
			background: var(--pry-clr-1);
			color: #fff;
			font-size: 13px;
		}
	}
`;
