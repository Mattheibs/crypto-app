import React, { createContext, useContext, useState } from "react";
import { THEMES } from "./themeConfig";

export const ThemeContext = createContext({
	themeType: "dark",
	theme: THEMES["dark"],
});

export const ThemeProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState("dark");

	return (
		<ThemeContext.Provider
			value={{
				themeType: currentTheme,
				theme: THEMES[currentTheme],
				setCurrentTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
