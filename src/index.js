import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
// import ScrollToTop from "./components/scroll";
import { ThemeProvider } from "./components/contexts/theme/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<Sidebar />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
