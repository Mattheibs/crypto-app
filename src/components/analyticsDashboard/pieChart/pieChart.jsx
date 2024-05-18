import React, { useState, useEffect } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

import "./pieChart.scss";
import Dropdown from "../../dropdown/dropdown";

function UsdPieChart({ usdPriceData }) {
	const [selectedRange, setSelectedRange] = useState("0-20");
	const [filteredData, setFilteredData] = useState([]);
	const colors = [
		"#007AFF",
		"#2AC670",
		"#02CACD",
		"#956AFF",
		"#FDAD15",
		"#946aff",
		"#02cacd",
		"#C70039",
		"#900C3F",
		"#581845",
		"#DAF7A6",
		"#FFC300",
	];

	useEffect(() => {
		const filteredOption = () => {
			const [min, max] = selectedRange.split("-").map(Number);
			return usdPriceData
				.filter((item) => item.rank >= min && item.rank <= max)
				.map((item, index) => ({
					coinName: item.name,
					price: Number(item.price_usd),
					fill: colors[index % colors.length],
				}));
		};

		setFilteredData(filteredOption());
	}, [selectedRange, usdPriceData]);

	const handleOptionSelect = (option) => {
		setSelectedRange(option);
	};

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="usd-price__custom-tooltip">
					<p className="label">{`Name : ${payload[0].payload.coinName}`}</p>
					<p className="label">{`Price : $${payload[0].payload.price}`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<div className="usd-pie-chart">
			<Dropdown onOptionSelect={handleOptionSelect} />
			<ResponsiveContainer height={260}>
				<PieChart width={400} height={400}>
					<Tooltip content={<CustomTooltip />} />
					<Pie
						data={filteredData}
						dataKey="price"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={120}
						style={{ outline: "none" }}
						strokeWidth={0.6}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

export default UsdPieChart;
