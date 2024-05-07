import React from "react";

import "./analyticsDashboard.scss";
import AnalyticsSlider from "../../components/analyticsDashboard/analyticsSlider/analyticsSlider";

function AnalyticsDashboard({ data }) {
	return (
		<div className="AnalyticsDashboard">
			<AnalyticsSlider sliderData={data} />
		</div>
	);
}

export default AnalyticsDashboard;
