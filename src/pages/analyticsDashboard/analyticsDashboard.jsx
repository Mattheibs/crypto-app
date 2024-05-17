import React from "react";

import "./analyticsDashboard.scss";
import AnalyticsSlider from "../../components/analyticsDashboard/analyticsSlider/analyticsSlider";
import UsdPriceGraph from "../../components/analyticsDashboard/usdPriceGraph/usdPriceGraph";

function AnalyticsDashboard({ data }) {
	return (
		<div className="analytics-dashboard">
			<AnalyticsSlider sliderData={data} />
			<UsdPriceGraph usdPriceData={data} />
		</div>
	);
}

export default AnalyticsDashboard;
