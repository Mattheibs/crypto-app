import React from "react";
import { useTheme } from "../contexts/theme/themeContext";
import "./toggle.scss";

function Toggle() {
	const { themeType, setCurrentTheme } = useTheme();
	const toggleTheme = () => {
		setCurrentTheme((prevTheme) =>
			prevTheme === "dark" ? "light" : "dark"
		);
	};
	return (
		<div className="toggle">
			<div className="theme__toggle-button">
				<label className="switch">
					<input type="checkbox" />
					<span
						className="slider round"
						onClick={toggleTheme}
					></span>
				</label>
			</div>
		</div>
	);
}

export default Toggle;
