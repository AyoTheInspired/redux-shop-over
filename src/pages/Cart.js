import { IconButton } from "@material-ui/core";
import { AddCircle, DeleteForever, RemoveCircle } from "@material-ui/icons";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "../features/shopSlice";

function Cart() {
	const cartItems = useSelector(selectCart);

	return (
		<Container>
			<Row>
				the cart page
				<Section className="flexed flex-wrap bg-secondary py-4">
					<Col sm={8} md={5} lg={5} className="cartPage__left">
						{cartItems.map((item) => {
							const { image, title, price, id, qty } = item;

							return (
								<CartItemWrap key={id} className="flexed my-4">
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
											<p className="mb-0 my-2 itemQtyTag text-center">
												Quantity
											</p>
											<div className="qty__buttons flexed mt-3">
												<RemoveCircle className="adjuster" />
												<p className="item__qty mb-0 mx-3">{qty}</p>
												<AddCircle className="adjuster" />
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
											<p className="total__value"> {price * qty} </p>
										</div>

										<div className="item__remove flexed p-2">
											{/* <IconButton> */}
											<DeleteForever className="delete__icon" />

											<p className="remove mb-0">Remove</p>
											{/* </IconButton> */}
										</div>
									</div>
								</CartItemWrap>
							);
						})}
					</Col>
					<Col sm={8} md={5} lg={5} className="cartPage__right"></Col>
				</Section>
			</Row>
		</Container>
	);
}

export default Cart;

const Section = styled.section``;

const CartItemWrap = styled.div`
	background: #fff;
	padding: 10px 15px;
	border-radius: 10px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);

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
		/* align-items: center; */
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
