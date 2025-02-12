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
			<div className="slider-container overflow-hidden">
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
			<AboutUsComponent />
			<ServicesComponent />
			<Projects />
			<Testimonials />
			<Transform />
		</>
	);
}
