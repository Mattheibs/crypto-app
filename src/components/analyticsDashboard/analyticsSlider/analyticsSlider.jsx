import React, { useState, useEffect } from "react";
import jsonData from "../../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./analyticsSlider.scss";
import { Autoplay } from "swiper/modules";

function AnalyticsSlider() {
	const [cryptoData, setCryptoData] = useState([]);
	useEffect(() => {
		setCryptoData(jsonData);
	}, []);

	return (
		<div className="analytics-slider">
			<Swiper
				modules={[Autoplay]}
				className="analytics-slider__swiper"
				slidesPerView={4}
				spaceBetween={10}
				loop={true}
				navigation={true}
				autoplay={{
					delay: 2500,
					pauseOnMouseEnter: true,
				}}
			>
				{cryptoData.length > 0
					? cryptoData.map((coin, index) => {
							return (
								<SwiperSlide
									key={index}
									className="analytics-slider__swiper__slide"
								>
									<h4>
										{coin.name} ({coin.symbol})
									</h4>
									<p>{coin.price_usd}$</p>
									<p>
										Last 24h:
										<b
											style={{
												color:
													coin.percent_change_24h >
													0
														? "green"
														: "orange",
											}}
										>
											{coin.percent_change_24h}
											%
										</b>
									</p>
								</SwiperSlide>
							);
					  })
					: null}
			</Swiper>
		</div>
	);
}

export default AnalyticsSlider;
