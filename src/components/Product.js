import { AddShoppingCart } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	retrieveItems,
	selectCart,
	selectSetProducts,
} from "../features/shopSlice";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import StarRatingComponent from "react-star-rating-component";
import { addToCart } from "../features/shopSlice";

function ProductComponent() {
	const products = useSelector(selectSetProducts);
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const truncate = (text, number) =>
		text.length > number ? `${text.substring(0, number)}...` : text;

	// useEffect(() => {
	// 	const parsedData = JSON.parse(localStorage.getItem("cart-items"));

	// 	if (parsedData) {
	// 		dispatch(retrieveItems(parsedData));
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem("cart-items", JSON.stringify(cart));
	// }, [addToCart, cart]);

	return (
		<>
			{/* <h4 className="d-block test-text">SHOW THIS FIRST AND FOREMOST</h4> */}
			{products.map((product) => {
				const {
					id,
					title,
					image,
					price,
					rating: { rate },
				} = product;

				return (
					<Col lg={3} md={5} sm={4} key={id} className="my-3">
						<Wrap className="d-flex flex-column mx-3">
							<div className="productImg__wrap flexed pt-2">
								<img
									className="product__image"
									src={image}
									alt={title}
									width="100"
									height="150"
								/>
							</div>
							<div className="product__details p-2 pb-1">
								<div className="details__top flex-btw">
									<p className="product__title mb-0 text-center">
										{truncate(title, 25)}
									</p>
									<IconButton>
										<AddShoppingCart
											className="items__cartIcon"
											onClick={() => {
												dispatch(addToCart(product));
											}}
										/>
									</IconButton>
								</div>
								<div className="details__mid flex-btw">
									<p className="mb-0 product__price">${price}</p>
									<StarRatingComponent
										name={title}
										className="star__rating"
										starCount={5}
										value={rate}
									/>
								</div>
								<div className="details__bottom">
									<Link to={`/product/${id}`} className="product__link">
										<p className="mb-0 product__more text-center my-2 py-2">
											More Details
										</p>
									</Link>
								</div>
							</div>
						</Wrap>
					</Col>
				);
			})}
		</>
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
