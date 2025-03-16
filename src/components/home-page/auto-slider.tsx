"use client";

import Slider from "react-slick";

const AutoSlider = () => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 2000,
		cssEase: "linear",
	};

	return (
		<div className="slider-container overflow-x-hidden bg-white">
			<Slider {...settings}>
				<div className="whitespace-nowrap">
					<h2 className="text-4xl uppercase text-center md:text-8xl xl:text-[10rem] text-[#D6F1ED] truncate">
						We are <span className="font-playfair">astral</span>
					</h2>
				</div>
				<div className="whitespace-nowrap">
					<h2 className="text-4xl  uppercase text-center md:text-8xl xl:text-[10rem] text-[#D6F1ED] truncate">
						We are <span className="font-playfair">astral</span>
					</h2>
				</div>
				<div className="whitespace-nowrap">
					<h2 className="text-4xl uppercase text-center md:text-8xl xl:text-[10rem] text-[#D6F1ED] truncate">
						We are <span className="font-playfair">astral</span>
					</h2>
				</div>
			</Slider>
		</div>
	);
};
export default AutoSlider;
