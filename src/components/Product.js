import { AddShoppingCart, TimeToLeaveRounded } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectSetProducts } from "../features/shopSlice";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

function ProductComponent() {
	const products = useSelector(selectSetProducts);
	// const renderList = products.map((product) => {
	// 	const { id, title, image, price, category } = product;
	// });

	const truncate = (text, number) =>
		text.length > number ? `${text.substring(0, number)}...` : text;

	return (
		<>
			{products.map((product) => {
				const { id, title, image, price, category } = product;

				return (
					<Col lg={3} md={5} sm={4} key={id} className="my-3">
						<Wrap className="flex-col mx-3">
							<div className="productImg__wrap pt-2">
								<img
									className="product__image"
									src={image}
									alt={title}
									width="100"
									height="150"
								/>
							</div>
							<div className="product__details px-2">
								<div className="details__top flex-btw">
									<p className="product__title mb-0 text-center">
										{truncate(title, 25)}
									</p>
									<IconButton>
										<AddShoppingCart className="items__cartIcon" />
									</IconButton>
								</div>
								<div className="details__mid">
									<p className="mb-0 product__price">${price}</p>
								</div>
								<div className="details__bottom"></div>
							</div>
						</Wrap>
					</Col>
				);
			})}
			{/* 
		// <div className="flexed" key={id}>
		// 	<Link to={`/product/${id}`}>
		// 		<div className="ui link cards">
		// 			<div className="card">
		// 				<div className="image">
		// 					<img src={image} alt={title} />
		// 				</div>
		// 				<div className="content">
		// 					<div className="header"> {title} </div>
		// 					<div className="meta price"> $ {price} </div>
		// 					<div className="meta"> {category} </div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</Link>
		// </div>
	// ); */}
		</>
	);
	// return <>{renderList}</>;
}

export default ProductComponent;

const Wrap = styled.div`
	background: #fff;
	.product__image {
		object-fit: contain;
		/* width: 15vw; */
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
	}
`;
