import { AddCircle, RemoveCircle } from "@material-ui/icons";
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
				<Section className="flexed flex-wrap bg-secondary">
					<Col sm={8} md={5} lg={5} className="cartPage__left">
						{cartItems.map((item) => {
							const { image, title, price, id, qty } = item;

							return (
								<CartItemWrap key={id} className="flexed">
									<div className="cartItem__imageWrap">
										<img
											src={image}
											alt={title}
											width="80"
											className="cartItem__image"
										/>
									</div>
									<div className="cartItem__titleWrap">
										<div className="itemTitle__top mb-3">
											<p className="mb-0 text-center cartItem__title">
												{title}
											</p>
										</div>
										<div className="itemTitle__bottom">
											<p className="mb-0 my-2 itemQtyTag text-center">
												Quantity
											</p>
											<div className="qty__buttons flexed mt-3">
												{/* <span className="reduce__qty"> - </span> */}
												<RemoveCircle className="adjuster" />
												<p className="item__qty mb-0 mx-3">{qty}</p>
												<AddCircle className="adjuster" />
												{/* <span className="increase__qty"> + </span> */}
											</div>
										</div>
									</div>
									<div className="cartItem__priceWrap d-flex flex-column">
										<div className="item__price">
											<p className="mb-0 price__value"> {price} </p>
										</div>

										<div className="item__total"></div>

										<div className="item__remove"></div>
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

	.cartItem__imageWrap {
		margin-right: 15px;
	}

	.itemQtyTag {
		padding: 5px 15px;
		background: #ddd;
		font-weight: 700;
		letter-spacing: 0.3px;
		color: var(--pry-clr-1);
	}

	.cartItem__titleWrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item__qty {
		font-size: 18px;
		font-weight: bold;
	}

	/* .reduce__qty {
		background: var(--pry-clr-1);
		color: #fff;
		font-size: 22px;
		border-radius: 100%;
		padding: 0 10px;
	} */

	.adjuster {
		color: var(--pry-clr-1);
		font-size: 22px;
		cursor: pointer;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
	}
`;
