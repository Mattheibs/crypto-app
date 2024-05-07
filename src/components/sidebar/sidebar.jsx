import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.scss";

function Sidebar() {
	return (
		<div className="sidebar">
			<h1>Cryp-Dash</h1>
			<div className="sidebar__links">
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
					to="/profile-settings"
					className={({ isActive }) =>
						isActive ? "active" : undefined
					}
				>
					Settings
				</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;
