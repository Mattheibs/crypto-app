import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.scss";

function Sidebar() {
	return (
		<div className="sidebar">
			<h1>Cryp-Dash</h1>
			<div className="sidebar__links">
				<NavLink exact to="/" activeClassName="active">
					Analytics Dashboard
				</NavLink>
				<NavLink to="/table-view" activeClassName="active">
					Table View
				</NavLink>
				<NavLink to="/profile-settings" activeClassName="active">
					Settings
				</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;
