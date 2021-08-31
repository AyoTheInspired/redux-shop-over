import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectCart } from "../features/shopSlice";

function Navigation() {
	const cart = useSelector(selectCart);

	const [cartItems, setCartItems] = useState(0);

	useEffect(() => {
		let count = 0;

		cart.forEach((item) => {
			count += item.qty;

			setCartItems(count);
		});
	}, [cart, cartItems]);

	return (
		<Nav className="py-2 px-3 flex-btw">
			<div className="nav__left">
				<Link to="/" className="homeLink">
					<p className="mb-0 logo__text">TheShopOver!</p>
				</Link>
			</div>
			<p className="mb-0 text-center text-white bg-danger text-uppercase px-4 py-2 col-6">
				NB: App is still in build.
			</p>
			<div className="nav__right">
				<Link to="/cart">
					<ShoppingCartOutlined className="cart__icon" />
					<span className="badge__wrap"> {parseInt(cartItems)} </span>
				</Link>
			</div>
		</Nav>
	);
}

export default Navigation;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	z-index: 100;
	background: #f1f7f8;
	width: 100%;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);

	.homeLink {
		text-decoration: none !important;
		color: #000;
	}

	.logo__text {
		font-family: "Cookie", sans-serif;
		font-size: 25px;
		background: var(--pry-clr-1);
		padding: 0 10px;
		color: #fff;
		letter-spacing: 0.5px;
		border-radius: 5px;
	}

	.nav__right {
		position: relative;
		margin-right: 5px;
		margin-top: 5px;

		.cart__icon {
			font-size: 25px;
			color: var(--pry-clr-1);
		}

		.badge__wrap {
			position: absolute;
			top: -5px;
			right: -10px;
			background: var(--pry-clr-2);
			font-size: 13px;
			padding: 1px 6px;
			border-radius: 50%;
			color: #fff;
		}
	}
`;
