import React from "react";

import "./analyticsDashboard.scss";
import AnalyticsSlider from "../../components/analyticsDashboard/analyticsSlider/analyticsSlider";
import UsdPriceGraph from "../../components/analyticsDashboard/usdPriceGraph/usdPriceGraph";
import TimeLineChart from "../../components/analyticsDashboard/timeLineChart/timeLineChart";
import UsdPieChart from "../../components/analyticsDashboard/pieChart/pieChart";

function AnalyticsDashboard({ data }) {
	return (
		<div className="analytics-dashboard">
			<AnalyticsSlider sliderData={data} />
			<UsdPriceGraph usdPriceData={data} />
			<div className="analytics-dashboard__bottom">
				<TimeLineChart usdPriceData={data} />
				<UsdPieChart usdPriceData={data} />
			</div>
		</div>
	);
}

export default AnalyticsDashboard;
