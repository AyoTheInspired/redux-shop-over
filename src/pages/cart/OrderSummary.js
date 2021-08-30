import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

function OrderSummary() {
	return (
		<StyledCol sm={8} md={5} lg={4} className="cartPage__right">
			<h3 className="mb-0 summary__title text-center">
				Order Summary
				<div className="underline"></div>
			</h3>

			<div className="summary__totals p-3">
				<div className="top flex-btw col-lg-8 mx-auto">
					<p className="mb-0 total__tag">Total Items: </p>
					<h5 className="mb-0 total__value"> 8 </h5>
				</div>
				<div className="bottom flex-btw col-lg-8 mx-auto mt-3">
					<p className="mb-0 total__tag">Total Amount: </p>
					<h5 className="mb-0 total__value">$ 800.00 </h5>
				</div>
			</div>
			<div className="summary__deliveries">
				<h5 className="delivery__title text-center">
					Additional Information
					<div className="underline"></div>
				</h5>
			</div>
			<div className="summary__promotions">
				<div className="delivery__wrap">
					<select className="w-50">
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">
							Coconut
						</option>
						<option value="mango">Mango</option>
					</select>
				</div>
			</div>
			<div className="summary__checkout"></div>
		</StyledCol>
	);
}

export default OrderSummary;

const StyledCol = styled(Col)`
	display: flex;
	flex-direction: column;
`;
