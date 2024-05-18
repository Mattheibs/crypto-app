import React, { useState, useEffect } from "react";
import jsonData from "./data.json";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AnalyticsDashboard from "./pages/analyticsDashboard/analyticsDashboard";
import Settings from "./pages/settings/settings";
import { useTheme } from "./components/contexts/theme/themeContext";
import TableView from "./pages/tableView/tableView";
import Sidebar from "./components/sidebar/sidebar";
import NotFound from "./components/notFound/notFound";

function App() {
	const { theme } = useTheme();
	const [cryptoData, setCryptoData] = useState([]);
	useEffect(() => {
		setCryptoData(jsonData);
	}, []);

	return (
		<div style={{ ...theme }} className="app">
			<Sidebar />
			<div className="sidebar-margin">
				<Routes>
					<Route
						path="/"
						element={<AnalyticsDashboard data={cryptoData} />}
					/>
					<Route
						path="/table-view"
						element={<TableView tableData={cryptoData} />}
					/>
					<Route path="/settings" element={<Settings />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
