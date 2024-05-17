import React, { useState, useEffect } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

import "./pieChart.scss";
import Dropdown from "../../dropdown/dropdown";

function UsdPieChart({ usdPriceData }) {
	const [selectedRange, setSelectedRange] = useState("0-20");
	const [filteredData, setFilteredData] = useState([]);
	const colors = [
		"#8884d8",
		"#8dd1e1",
		"#82ca9d",
		"#a4de6c",
		"#d0ed57",
		"#ffc658",
		"#ff8042",
		"#ffbb28",
		"#ff8042",
		"#0088fe",
		"#00c49f",
		"#ffbb28",
		"#ff8042",
		"#d0ed57",
		"#a4de6c",
		"#82ca9d",
		"#8dd1e1",
		"#8884d8",
		"#83a6ed",
		"#8dd1e1",
		"#82ca9d",
		"#a4de6c",
		"#d0ed57",
		"#ffc658",
		"#ff8042",
		"#ffbb28",
		"#ff8042",
		"#0088fe",
		"#00c49f",
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
					<Tooltip
						// cursor={{ fill: "transparent" }}
						content={<CustomTooltip />}
					/>
					<Pie
						data={filteredData}
						dataKey="price"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={120}
						fill="#8884d8"
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

export default UsdPieChart;
