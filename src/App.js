import React from "react";
import jsonData from "./data.json";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AnalyticsDashboard from "./components/analyticsDashboard/analyticsDashboard";
import TableView from "./components/tableView/tableView";
import ProfileSettings from "./components/profileSettings/profileSettings";
import { useTheme } from "./components/contexts/theme/themeContext";

function App() {
	// const [cryptoData, setCryptoData] = useState([]);
	// useEffect(() => {
	// 	setCryptoData(jsonData);
	// }, []);
	const { theme } = useTheme();

	return (
		<div style={{ ...theme }} className="app">
			<Routes>
				<Route path="/" element={<AnalyticsDashboard />} />
				<Route path="/table-view" element={<TableView />} />
				<Route
					path="/profile-settings"
					element={<ProfileSettings />}
				/>
			</Routes>
		</div>
	);
}

export default App;
