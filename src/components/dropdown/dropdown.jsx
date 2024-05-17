import React, { useEffect, useState } from "react";

// Styles
import "./dropdown.scss";

const Dropdown = ({ onOptionSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("0-20");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		onOptionSelect(option);
	};

	const options = ["0-20", "21-40", "41-60", "61-80", "81-100"];

	const handleClickOutside = (event) => {
		if (isOpen && !event.target.closest(".dropdown")) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className={`dropdown`} onClick={toggleDropdown}>
			<div className="dropdown__header">
				<p>{selectedOption}</p>
				<p className={`${isOpen ? "arrow-up" : "arrow"} `}></p>
			</div>
			{isOpen && (
				<div className="dropdown__options">
					{options.map((option) => (
						<div
							key={option}
							className="flex"
							onClick={() => {
								handleOptionClick(option);
							}}
						>
							<input
								type="checkbox"
								id={`option-${option}`}
								checked={selectedOption === option}
								className="dropdown__options__option"
								onChange={() => {}}
							/>
							<label htmlFor={`option-${option}`}>
								{option}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
