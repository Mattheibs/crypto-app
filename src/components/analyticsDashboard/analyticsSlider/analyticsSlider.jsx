import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./analyticsSlider.scss";
import { Autoplay } from "swiper/modules";

function AnalyticsSlider({ sliderData }) {
	return (
		<div className="analytics-slider">
			<Swiper
				modules={[Autoplay]}
				className="analytics-slider__swiper"
				slidesPerView={4}
				spaceBetween={15}
				loop={true}
				navigation={true}
				autoplay={{
					delay: 2500,
					pauseOnMouseEnter: true,
				}}
			>
				{sliderData.length > 0
					? sliderData.map((coin, index) => {
							return (
								<SwiperSlide
									key={index}
									className="analytics-slider__swiper__slide"
								>
									<h4>
										{coin.name} ({coin.symbol})
									</h4>
									<p>${coin.price_usd}</p>
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
