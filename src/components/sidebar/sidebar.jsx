import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../toggle/toggle";
import "./sidebar.scss";

//Images
import mascot from "../../images/mascot.svg";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h1>Cryp-Dash</h1>
				<div className="sidebar__top__links">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "active" : undefined
						}
					>
						Analytics Dashboard
					</NavLink>
					<NavLink
						to="/table-view"
						className={({ isActive }) =>
							isActive ? "active" : undefined
						}
					>
						Table View
					</NavLink>
					<NavLink
						to="/settings"
						className={({ isActive }) =>
							isActive ? "active" : undefined
						}
					>
						Settings
					</NavLink>
				</div>
			</div>

			<div className="sidebar__bottom">
				<div className="sidebar__bottom__advert">
					<h3>Sign up today for a 30 day free trial!</h3>
					<img src={mascot} alt="" />
				</div>
				<div className="sidebar__bottom__toggle">
					<Toggle />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
