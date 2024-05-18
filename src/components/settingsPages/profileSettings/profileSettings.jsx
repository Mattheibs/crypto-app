import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast } from "../../../utils/toast";

//Styles
import "./profileSettings.scss";

//Images
import person from "../../../images/person.svg";
import edit from "../../../images/edit.svg";
import deleteIcon from "../../../images/delete.svg";

function ProfileSettings() {
	const [details, setDetails] = useState({
		firstName: "Hondo",
		lastName: "Joe",
		email: "email@gmail.com",
		phoneNumber: "123 456 7890",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value,
		});
	};
	const updateDetails = (e) => {
		e.preventDefault();
		showSuccessToast("Your details have been updated");
	};

	return (
		<div className="profile-settings-page">
			<ToastContainer />
			<div className="profile-settings-page__image">
				<img
					src={person}
					alt=""
					className="profile-settings-page__image__profile"
				/>
				<div className="profile-settings-page__image__options">
					<img src={edit} alt="" />
					<img src={deleteIcon} alt="" />
				</div>
			</div>
			<form
				onSubmit={updateDetails}
				className="profile-settings-page__details"
			>
				<div className="profile-settings-page__details__names">
					<div className="profile-settings-page__details__names__input-container">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="First Name"
							value={details.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="profile-settings-page__details__input-container">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Last Name"
							value={details.lastName}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="profile-settings-page__details__input-container">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value={details.email}
						onChange={handleChange}
					/>
				</div>
				<div className="profile-settings-page__details__input-container">
					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="text"
						name="phoneNumber"
						id="phoneNumber"
						placeholder="Phone Number"
						value={details.phoneNumber}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Update Details</button>
			</form>
		</div>
	);
}

export default ProfileSettings;
