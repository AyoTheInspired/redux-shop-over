import { ShoppingBasket, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

function Navigation() {
	return (
		<Nav className="py-2 px-3 flex-btw">
			<div className="nav__left">
				<h3 className="mb-0">The ShopOver!</h3>
			</div>
			<div className="nav__right">
				<ShoppingCart className="cart__icon" />
				<span className="badge__wrap">9</span>
			</div>
		</Nav>
	);
}

export default Navigation;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	background: #f1f7f8;
	width: 100%;

	.nav__right {
		position: relative;

		.cart__icon {
			font-size: 25px;
		}

		.badge__wrap {
			position: absolute;
			top: -5px;
			right: -10px;
			background: red;
			font-size: 13px;
			padding: 1px 6px;
			border-radius: 50%;
			color: #fff;
		}
	}
`;
