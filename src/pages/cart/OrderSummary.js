import React, { useState } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

function OrderSummary() {
	const [deliveryType, setDeliveryType] = useState("plans");

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
					<label className="w-75">
						<p className="my-2 delivery__label">Select a Delivery Type</p>
						<select
							className="w-75"
							value={deliveryType}
							onChange={(e) => {
								setDeliveryType(e.target.value);
							}}>
							<option value="grapefruit">Standard - $ 200</option>
							<option value="lime">Premium - $ 400</option>
							{/* <option value="coconut">Coconut</option>
							<option value="mango">Mango</option> */}
						</select>
					</label>
				</div>

				<div className="promotions__wrap"></div>
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
