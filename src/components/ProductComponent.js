import React from "react";
import { useSelector } from "react-redux";
import { selectItemAdded } from "../features/shopSlice";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FadingCircle from "better-react-spinkit/dist/FadingCircle";
import CartAlert from "./CartAlert";
import SingleProduct from "./SingleProduct";

function ProductComponent() {
	const { errorMsg, isLoading } = useSelector((state) => state.shop);
	const itemAdded = useSelector(selectItemAdded);

	return (
		<Container>
			<Row>
				{itemAdded && <CartAlert />}
				{isLoading ? (
					<div className="flex-col">
						<FadingCircle size={100} color="#ddd" />
						<h3 className="mt-5 mb-0 py-3 text-white text-center">
							Please Wait
						</h3>
					</div>
				) : errorMsg ? (
					<h3 className="mb-0 text-white">{errorMsg} ... Please Refresh </h3>
				) : (
					<SingleProduct />
				)}
			</Row>
		</Container>
	);
}

export default ProductComponent;

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
