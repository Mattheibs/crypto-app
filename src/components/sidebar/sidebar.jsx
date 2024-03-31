import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";

function Sidebar() {
	return (
		<div className="sidebar">
			<Link to="/">Analytics Dashboard</Link>
			<Link to="/table-view">Table View</Link>
			<Link to="/profile-settings">Settings</Link>
			<h1 className="practice">h</h1>
		</div>
	);
}

export default Sidebar;
