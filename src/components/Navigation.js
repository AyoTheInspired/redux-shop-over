import { Menu, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectCart } from "../features/shopSlice";

const productCategories = [
	{ name: "All", property: "all" },
	{ name: "Men's Clothing", propertye: "Men's clothing" },
	{ name: "Women's Clothing", property: "women's clothing" },
	{ name: "Jewellery", property: "jewelery" },
	{ name: "Electronics", property: "electronics" },
];

function Navigation() {
	const cart = useSelector(selectCart);
	const [categoryClicked, setCategoryClicked] = useState(false);
	const [cartItems, setCartItems] = useState(0);

	// const changeCatgory = (e) => {
	// 	setCategoryClicked(!categoryClicked);
	// 	// e.classList.add("category__item-clicked");
	// };

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
			<div
				className={`${
					categoryClicked && "show__sidebar"
				} nav__mid flexed col-lg-6 col-md`}
				categoryClicked>
				<ul className="col my-auto">
					{productCategories.map((category, id) => {
						const { name, property } = category;
						return (
							<li
								data-id={property}
								// onClick={changeCatgory}
								className=" mx-auto"
								key={id + 1}>
								<a href="#" className="category__item text-center">
									{name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="nav__right">
				<Link to="/cart">
					<ShoppingCartOutlined className="cart__icon" />
					<span className="badge__wrap"> {cartItems} </span>
				</Link>
			</div>

			<div className="hamburger__container d-lg-none">
				<Menu onClick={() => setCategoryClicked(!categoryClicked)} />
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
		margin-right: 10px;
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

	.nav__mid {
		margin: 0 5px;

		ul {
			display: flex;
			justify-content: space-around;
			align-items: center;
			align-self: center !important;

			li {
				list-style-type: none;
				font-size: 15px;
				font-weight: 500;
				cursor: pointer;
				padding: 3px 10px;
				border: 1px solid var(--pry-clr-3);
				border-radius: 5px;
				letter-spacing: 0.5px;
				transition: var(--sht-trans);

				a {
					text-decoration: none;
					color: #000;

					:hover {
						/* color: #fff; */
					}
				}

				:hover {
					background: var(--pry-clr-1);
				}
				:hover a {
					color: #fff;
				}
			}
		}
	}

	.hamburger__container {
		cursor: pointer;
	}

	@media (max-width: 768px) {
		position: relative;

		.nav__mid {
			position: absolute;
			top: 49px;
			left: 0;
			min-height: calc(100vh - 49px);
			width: 100%;
			background: #aaa;
			transition: transform 0.25s linear;

			ul {
				display: flex;
				flex-direction: column;
				background: blue;
				height: 92vh;
				max-width: 50vw;
				justify-content: space-around;
				align-items: flex-start !important;
				margin-left: auto;

				/* li {
					background: red;
					align-content: flex-end !important;
				} */
			}
		}

		.hamburger__container {
			display: block;
			/* margin-left: 25px; */
		}

		.show__sidebar {
			transform: translateX(100%);
		}
	}
`;
