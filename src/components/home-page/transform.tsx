"use client";

import Image from "next/image";
import Slider from "react-slick";
import transform_01 from "../../../public/Office/office_1.jpg";
import transform_02 from "../../../public/Office/office_2.jpg";
import transform_03 from "../../../public/Office/office_3.jpg";
import transform_04 from "../../../public/Office/office_4.jpg";
import { CustomButton } from "../ui/customButton";

const Transform = () => {
	const settings = {
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 2000,
		cssEase: "linear",
	};

	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex flex-col xl:flex-row items-center justify-between gap-8">
				<div className="flex xl:flex-col justify-between gap-4 xl:gap-0 xl:space-y-40">
					<div>
						<Image
							src={transform_01}
							alt="Image 1"
							width={800}
							height={800}
							className="w-[300px] h-full object-cover"
						/>
					</div>
					<div>
						<Image
							src={transform_02}
							alt="Image 1"
							width={800}
							height={800}
							className="w-[270px] h-full object-cover"
						/>
					</div>
				</div>

				<div className="w-full lg:w-1/2 mx-auto text-center">
					<div className="slider-container z-10 overflow-hidden">
						<Slider {...settings}>
							<div className="whitespace-nowrap">
								<p className="text-xs lg:text-base truncate text-center md:text-base mb-[20px]">
									* Let&apos;s talk – Let&apos;s talk – Let&apos;s talk –
									Let&apos;s talk – Let&apos;s talk – Let&apos;s talk
								</p>
							</div>
							<div className="whitespace-nowrap">
								<p className="text-xs lg:text-base truncate text-center md:text-base mb-[20px]">
									* Let&apos;s talk – Let&apos;s talk – Let&apos;s talk –
									Let&apos;s talk – Let&apos;s talk – Let&apos;s talk
								</p>
							</div>
							<div className="whitespace-nowrap">
								<p className="text-xs lg:text-base truncate text-center md:text-base mb-[20px]">
									* Let&apos;s talk – Let&apos;s talk – Let&apos;s talk –
									Let&apos;s talk – Let&apos;s talk – Let&apos;s talk
								</p>
							</div>
						</Slider>
					</div>

					<h2 className="text-[2rem] md:text-[3rem] lg:text-[5rem] uppercase leading-[1] mb-[20px] text-primary text-center">
						Ready to Transform Your
						<span className="font-playfair"> Space?</span>.
					</h2>

					<p className="text-[1.125rem] mb-[20px]">
						Let’s bring your design vision to life! Whether you’re looking for a
						complete makeover or just a fresh update, our team is here to help.
					</p>

					<CustomButton link="/contact-us">Get in touch</CustomButton>
				</div>

				<div className="flex xl:flex-col justify-between gap-4 xl:gap-0 xl:space-y-40 text-right">
					<div>
						<Image
							src={transform_03}
							alt="Image 1"
							width={800}
							height={800}
							className="w-[270px] h-full object-cover "
						/>
					</div>
					<div>
						<Image
							src={transform_04}
							alt="Image 1"
							width={800}
							height={800}
							className="w-[270px] h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Transform;
