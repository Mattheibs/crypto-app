import React, { useState } from "react";
import "./settings.scss";
import ProfileSettings from "../../components/settingsPages/profileSettings/profileSettings";
import Billing from "../../components/settingsPages/billing/billing";

function Settings() {
	const [selectedMenu, setSelectedMenu] = useState("Profile Settings");

	const handleMenuClick = (menu) => {
		setSelectedMenu(menu);
	};

	return (
		<div className="settings">
			<div className="settings__menu">
				<div onClick={() => handleMenuClick("Profile Settings")}>
					Profile Settings
				</div>
				<div onClick={() => handleMenuClick("Billing")}>
					Billing
				</div>
			</div>
			<div className="settings__line">
				<div
					className={`settings__line__inner ${selectedMenu
						.replace(" ", "-")
						.toLowerCase()}`}
				></div>
			</div>

			{selectedMenu === "Profile Settings" ? (
				<ProfileSettings />
			) : (
				<Billing />
			)}
		</div>
	);
}

export default Settings;
