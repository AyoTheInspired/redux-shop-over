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
							const { image, title, price, id } = item;

							return (
								<CartItemWrap key={id} className="flexed bg-danger">
									<div className="cartItem__imageWrap">
										<img src={image} alt={title} width="100" />
									</div>
									<div className="cartItem__title"></div>
									<div className="cartItem__price"></div>
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

const CartItemWrap = styled.div``;
