import React, { useState, useEffect } from "react";
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
import Dropdown from "../../dropdown/dropdown";

function UsdPriceGraph({ usdPriceData }) {
	const [selectedRange, setSelectedRange] = useState("0-20");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const filteredOption = () => {
			const [min, max] = selectedRange.split("-").map(Number);
			return usdPriceData
				.filter((item) => item.rank >= min && item.rank <= max)
				.map((item) => ({
					coinName: item.name,
					price: item.price_usd,
				}));
		};
		setFilteredData(filteredOption());
	}, [selectedRange, usdPriceData]);

	const handleOptionSelect = (option) => {
		setSelectedRange(option);
	};

	const maxValue = Math.max(...filteredData.map((item) => item.price));

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
		<div className="usd-price">
			<Dropdown onOptionSelect={handleOptionSelect} />
			<ResponsiveContainer height={260}>
				<BarChart
					data={filteredData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					className="bar"
				>
					<defs>
						<linearGradient
							id="colorPrice"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="0%"
								stopColor="#017aff"
								stopOpacity={1}
							/>
							<stop
								offset="100%"
								stopColor="#017aff"
								stopOpacity={0.3}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid vertical={false} horizontal={false} />
					<XAxis
						dataKey="coinName"
						tickLine={true}
						stroke="var(--text)"
						height={50}
						tick={{ fontSize: 12 }}
						interval={0}
						angle={-15}
						tickMargin={20}
					/>
					<YAxis
						domain={[0, maxValue]}
						label={{
							value: "Price",
							angle: -90,
							fill: "var(--text)",
							position: "insideLeft",
							offset: -10,
						}}
						stroke="var(--text)"
						tickFormatter={(tick) => {
							return `$${tick.toFixed(0)}`;
						}}
						tickCount={8}
					/>
					<Tooltip
						cursor={{ fill: "transparent" }}
						content={<CustomTooltip />}
					/>
					<Bar
						type="monotone"
						dataKey="price"
						fill="url(#colorPrice)"
						radius={[8, 8, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default UsdPriceGraph;
