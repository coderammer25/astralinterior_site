"use client";

import { clients } from "@/data";
import Client from "./client";
import Slider from "react-slick";

const Testimonials = () => {
	const settings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280, // Tailwind's `xl` breakpoint
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1024, // Tailwind's `lg` breakpoint
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 768, // Tailwind's `md` breakpoint
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 640, // Tailwind's `sm` breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
 
	return (
		<section>
			<div className="px-4 pt-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="text-center mb-[4rem]">
					<h2 className="mb-7 text-[3rem] lg:text-[5rem] uppercase leading-[1] xl:w-2/3 mx-auto text-primary">
						What Our Clients Are <span className="font-playfair">saying</span>
					</h2>
					<p className="text-[1.125rem] leading-[1.4] w-2/3 mx-auto">
						We’re proud to have helped clients create spaces they truly love,
						and their satisfaction is our greatest reward.
					</p>
				</div>
			</div>

			<div className="slider-container">
				<Slider {...settings}>
					{clients.map((client) => (
						<Client key={client.client_id} client={client} />
					))}
				</Slider>
			</div>
		</section>
	);
};
export default Testimonials;
