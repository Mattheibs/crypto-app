import React from "react";

import "./analyticsDashboard.scss";
import AnalyticsSlider from "../../components/analyticsDashboard/analyticsSlider/analyticsSlider";
import UsdPriceGraph from "../../components/analyticsDashboard/usdPriceGraph/usdPriceGraph";
import TimeLineChart from "../../components/analyticsDashboard/timeLineChart/timeLineChart";

function AnalyticsDashboard({ data }) {
	return (
		<div className="analytics-dashboard">
			<AnalyticsSlider sliderData={data} />
			<UsdPriceGraph usdPriceData={data} />
			<TimeLineChart usdPriceData={data} />
		</div>
	);
}

export default AnalyticsDashboard;
