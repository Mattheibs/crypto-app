import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import "./usdPriceGraph.scss";

function UsdPriceGraph({ usdPriceData }) {
	return (
		<div className="usd-price">
			<BarChart
				width={730}
				height={250}
				data={usdPriceData}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar type="monotone" dataKey="price_usd" stroke="#8884d8" />
			</BarChart>
		</div>
	);
}

export default UsdPriceGraph;
