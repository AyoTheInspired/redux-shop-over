import { AddCircle, DeleteForever, RemoveCircle } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
	removeFromCart,
	selectCart,
	adjustQuantity,
	increaseQuantity,
	addToCart,
	retrieveItems,
} from "../../features/shopSlice";
import OrderSummary from "./OrderSummary";

function Cart() {
	const cartItems = useSelector(selectCart);
	const dispatch = useDispatch();
	const [itemQty, setItemQty] = useState(5);

	useEffect(() => {
		const data = localStorage.getItem("cart-items");
		const parsedData = JSON.parse(data);

		if (parsedData) {
			// dispatch(retrieveItems(parsedData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart-items", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<Container>
			<Row>
				<Section className="d-flex justify-content-center align-items-start flex-wrap py-4 mt-5">
					<div className="wrapper flexed flex-wrap col-lg-9 mx-auto px-4">
						<Col sm={8} md={5} lg={6} className="cartPage__left">
							{cartItems.map((item) => {
								const { image, title, price, id, qty } = item;

								return (
									<CartItemWrap
										key={id}
										className="d-flex align-items-center justify-content-between my-4">
										<div className="cartItem__imageWrap">
											<img
												src={image}
												alt={title}
												width="70"
												className="cartItem__image"
											/>
										</div>
										<div className="cartItem__titleWrap">
											<div className="itemTitle__top mb-3">
												<p className="mb-0 text-center cartItem__title mr-2">
													{title}
												</p>
											</div>
											<div className="itemTitle__bottom">
												<p className="mb-0 itemQtyTag text-center">Quantity</p>
												<div className="qty__buttons flexed mt-3">
													<RemoveCircle
														className="adjuster"
														onClick={() => {}}
													/>
													<p className="item__qty mb-0 mx-3">{qty} </p>
													<AddCircle
														className="adjuster"
														onClick={() => {
															console.log(qty);
															setItemQty((prevQty) => prevQty + 1);
															dispatch(increaseQuantity(item));
															console.log(qty);
														}}
													/>
												</div>
											</div>
										</div>
										<div className="cartItem__priceWrap">
											<div className="item__price">
												<p className="mb-0 price__value p-2 text-center">
													$ {price}{" "}
												</p>
											</div>

											<div className="item__total flex-col my-3 p-2">
												<p className="mb-0 total__tag">Total Cost</p>
												<p className="total__value">$ {price * qty} </p>
											</div>

											<div
												className="item__remove flexed p-2"
												onClick={() => dispatch(removeFromCart(id))}>
												<DeleteForever className="delete__icon" />

												<p className="remove mb-0">Remove</p>
											</div>
										</div>
									</CartItemWrap>
								);
							})}
						</Col>
						<OrderSummary />
					</div>
				</Section>
			</Row>
		</Container>
	);
}

{
}
export default Cart;

const Section = styled.section`
	background: #d4d4d4;

	.wrapper {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const CartItemWrap = styled.div`
	background: #fff;
	padding: 10px 15px;
	border-radius: 10px;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);

	.itemQtyTag {
		padding: 5px 15px;
		background: #ddd;
		font-weight: 700;
		letter-spacing: 0.3px;
		color: var(--pry-clr-1);
	}

	.cartItem__titleWrap {
		margin: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.cartItem__title {
			font-weight: bold;
		}
	}

	.item__qty {
		font-size: 18px;
		font-weight: bold;
	}

	.adjuster {
		color: var(--pry-clr-1);
		font-size: 22px;
		cursor: pointer;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
	}

	.cartItem__priceWrap {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.price__value,
		.item__total,
		.item__remove {
			background: var(--pry-clr-1);
			color: #fff;
			border-radius: 4px;
			white-space: nowrap;
			box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.3);

			.total__tag {
				font-size: 12px;
			}
		}

		.item__total {
			background-image: linear-gradient(
				to top,
				var(--pry-clr-1),
				var(--pry-clr-2)
			);
		}

		.price__value {
			font-size: 12px;
			font-weight: bold;
			letter-spacing: 0.5px;
		}

		.item__remove {
			transition: var(--sht-trans);
			cursor: pointer;
			:hover {
				background: red;
			}
		}
	}
`;
