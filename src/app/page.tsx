"use client";

import { AboutUsComponent } from "@/components/home-page/aboutUs";
import Banner from "@/components/home-page/banner";
import Projects from "@/components/home-page/projects";
import ServicesComponent from "@/components/home-page/services";
import Testimonials from "@/components/home-page/testimonials";
import Transform from "@/components/home-page/transform";
import Slider from "react-slick";

export default function HomePage() {
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
		<>
			<Banner />
			<div className="slider-container">
				<Slider {...settings}>
					<h2 className="uppercase text-center text-8xl xl:text-[14rem] text-[#D6F1ED]">
						We are <span className="font-playfair">astral</span>
					</h2>
					<h2 className="uppercase text-center text-8xl xl:text-[14rem] text-[#D6F1ED]">
						We are <span className="font-playfair">astral</span>
					</h2>
					<h2 className="uppercase text-center text-8xl xl:text-[14rem] text-[#D6F1ED]">
						We are <span className="font-playfair">astral</span>
					</h2>
				</Slider>
			</div>
			<AboutUsComponent />
			<ServicesComponent />
			<Projects />
			<Testimonials />
			<Transform />
		</>
	);
}
