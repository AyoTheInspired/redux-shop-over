import { TimeToLeaveRounded } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectSetProducts } from "../features/shopSlice";
import { Link } from "react-router-dom";

function ProductComponent() {
	const products = useSelector(selectSetProducts);
	const renderList = products.map((product) => {
		const { id, title, image, price, category } = product;

		return (
			<div className="four column wide" key={id}>
				<Link to={`/product/${id}`}>
					<div className="ui link cards">
						<div className="card">
							<div className="image">
								<img src={image} alt={title} />
							</div>
							<div className="content">
								<div className="header"> {title} </div>
								<div className="meta price"> $ {price} </div>
								<div className="meta"> {category} </div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	});

	return <>{renderList}</>;
}

export default ProductComponent;
