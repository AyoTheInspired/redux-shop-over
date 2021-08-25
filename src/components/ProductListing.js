import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectState, setProducts } from "../features/shopSlice";
import ProductComponent from "./Product";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const ProductListing = () => {
	const shopState = useSelector(selectState);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				console.log("Err", err);
			});

		console.log(response?.data);
		dispatch(setProducts(response?.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<Container>
			<Row>
				{/* <Col xs={6}>
					<Toast
						onClose={() => setShow(false)}
						show={show}
						delay={3000}
						autohide>
						<Toast.Header>
							<img
								src="holder.js/20x20?text=%20"
								className="rounded me-2"
								alt=""
							/>
							<strong className="me-auto">Bootstrap</strong>
							<small>11 mins ago</small>
						</Toast.Header>
						<Toast.Body>
							Woohoo, you're reading this text in a Toast!
						</Toast.Body>
					</Toast>
				</Col> */}
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
