import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	closeToast,
	selectItemAdded,
	setProducts,
} from "../features/shopSlice";
import ProductComponent from "./Product";
import axios from "axios";
import { Container, Row, Toast } from "react-bootstrap";

const ProductListing = () => {
	const dispatch = useDispatch();
	const itemAdded = useSelector(selectItemAdded);
	const [show, setShow] = useState(false);

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				alert("Err", err);
			});

		// console.log(response?.data);
		dispatch(setProducts(response?.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<Container>
			<Row>
				{itemAdded && (
					<div className="toast__wrapper mx-auto col flexed mt-5">
						<Toast
							onClose={() => {
								dispatch(closeToast());
							}}
							show={itemAdded}
							// delay={3000}
							// autohide={true}
						>
							{/* <Toast.Header>
								<img
									src="holder.js/20x20?text=%20"
									className="rounded me-2"
									alt=""
								/>
								<strong className="me-auto">Bootstrap</strong>
								<small>11 mins ago</small>
							</Toast.Header> */}
							<Toast.Body className="toast__body">
								Woohoo, you're reading this text in a Toast!
							</Toast.Body>
						</Toast>
					</div>
				)}
				<Section className="flexed flex-wrap py-3">
					<ProductComponent />
				</Section>
			</Row>
		</Container>
	);
};

export default ProductListing;

const Section = styled.section`
	/* margin-top: 20px !important; */
`;
