import React, { useState, useEffect } from "react";
import jsonData from "./data.json";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AnalyticsDashboard from "./pages/analyticsDashboard/analyticsDashboard";
import ProfileSettings from "./pages/profileSettings/profileSettings";
import { useTheme } from "./components/contexts/theme/themeContext";
import TableView from "./pages/tableView/tableView";

function App() {
	const { theme } = useTheme();
	const [cryptoData, setCryptoData] = useState([]);
	useEffect(() => {
		setCryptoData(jsonData);
	}, []);

	return (
		<div style={{ ...theme }} className="app">
			<Routes>
				<Route
					path="/"
					element={<AnalyticsDashboard data={cryptoData} />}
				/>
				<Route
					path="/table-view"
					element={<TableView tableData={cryptoData} />}
				/>
				<Route
					path="/profile-settings"
					element={<ProfileSettings />}
				/>
			</Routes>
		</div>
	);
}

export default App;
