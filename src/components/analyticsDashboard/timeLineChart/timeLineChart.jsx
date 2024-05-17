import React, { useState, useEffect } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import "./timeLineChart.scss";
import Dropdown from "../../dropdown/dropdown";

function TimeLineChart({ usdPriceData }) {
	const [filteredData, setFilteredData] = useState([]);

	const transformData = (data) => {
		const transformedData = {};

		data.filter((item) => item.rank <= 10).forEach((coin) => {
			coin.price_usd_last_7_days.forEach((priceData) => {
				if (!transformedData[priceData.date]) {
					transformedData[priceData.date] = {
						date: priceData.date,
					};
				}
				transformedData[priceData.date][coin.symbol] =
					priceData.price_usd;
			});
		});

		return Object.values(transformedData);
	};

	const chartData = transformData(usdPriceData);

	const maxValue = Math.max(...filteredData.map((item) => item.price));

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			const coinData = payload[0].payload;
			const coins = Object.keys(coinData).filter(
				(key) => key !== "date"
			);

			return (
				<div className="usd-price__custom-tooltip">
					<b>Date: {coinData.date}</b>
					{coins.map((coin, index) => (
						<p key={index}>
							{coin}: ${coinData[coin]}
						</p>
					))}
				</div>
			);
		}

		return null;
	};
	return (
		<div className="seven-days">
			<h1>Top 10 Coins for the past 7 days</h1>
			{!chartData.length ? null : (
				<ResponsiveContainer height={300}>
					<LineChart
						data={chartData}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
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
						<CartesianGrid
							vertical={false}
							horizontal={false}
						/>
						<XAxis
							dataKey="date"
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
						{Object?.keys(chartData[0])
							.filter((key) => key !== "date")
							.map((key, index) => (
								<Line
									dot={null}
									key={index}
									type="monotone"
									dataKey={key}
									stroke={`#${Math.floor(
										Math.random() * 16777215
									).toString(16)}`}
								/>
							))}
					</LineChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default TimeLineChart;
