import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast } from "../../../utils/toast";

//Styles
import "./billing.scss";

//Images
import person from "../../../images/person.svg";
import edit from "../../../images/edit.svg";
import deleteIcon from "../../../images/delete.svg";

function Billing() {
	const [billingDetails, setBillingDetails] = useState({
		cardHolderName: "H Joes",
		cardNumber: "11111 1111 11111 11111",
		cvc: "111",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBillingDetails({
			...billingDetails,
			[name]: value,
		});
	};
	const updateDetails = (e) => {
		e.preventDefault();
		showSuccessToast("Your details have been updated");
	};

	return (
		<div className="billing-page">
			<ToastContainer />
			<form onSubmit={updateDetails} className="billing-page__details">
				<div className="billing-page__details__input-container">
					<label htmlFor="cardHolderName">
						Card Holder Name
					</label>
					<input
						type="text"
						name="cardHolderName"
						id="cardHolderName"
						placeholder="Card Holder Name"
						value={billingDetails.cardHolderName}
						onChange={handleChange}
					/>
				</div>
				<div className="billing-page__details__input-container">
					<label htmlFor="cardNumber">Card Number</label>
					<input
						type="text"
						name="cardNumber"
						id="cardNumber"
						placeholder="Card Number"
						value={billingDetails.cardNumber}
						onChange={handleChange}
					/>
				</div>

				<div className="billing-page__details__small">
					<div className="billing-page__details__small__input-container">
						<label htmlFor="expiration">Expiration</label>
						<input
							type="text"
							name="expiration"
							id="expiration"
							placeholder="MM/YY"
						/>
					</div>
					<div className="billing-page__details__small__input-container">
						<label htmlFor="cvc">CVC</label>
						<input
							type="emai"
							name="cvc"
							id="cvc"
							placeholder="Emals"
							value={billingDetails.cvc}
							onChange={handleChange}
						/>
					</div>
				</div>

				<button type="submit">Update Details</button>
			</form>
		</div>
	);
}

export default Billing;
