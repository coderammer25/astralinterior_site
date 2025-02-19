"use client";

import Image from "next/image";
import Slider from "react-slick";

const Banner = () => {
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
		<section className="px-4 pt-[4rem] pb-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="text-center space-y-8 min-h-screen">
				<div
					className="lg:w-1/2 mx-auto"
					data-aos="fade-down"
					data-aos-duration="1000"
				>
					<div className="slider-container z-10 overflow-hidden">
						<Slider {...settings}>
							<div className="whitespace-nowrap">
								<p className="text-xs lg:text-base truncate">
									* Space Planning - Interior Styling - Lighting Design -
									Furniture Sourcing
								</p>
							</div>
							<div className="whitespace-nowrap">
								<p className="text-xs lg:text-base truncate">
									* Space Planning - Interior Styling - Lighting Design -
									Furniture Sourcing
								</p>
							</div>
							<div className="whitespace-nowrap">
								<p className="text-xs lg:text-base truncate">
									* Space Planning - Interior Styling - Lighting Design -
									Furniture Sourcing
								</p>
							</div>
						</Slider>
					</div>
				</div>

				<h1
					className="uppercase text-6xl xl:text-[7rem] xl:leading-[0.9] text-primary"
					data-aos="fade-down"
					data-aos-duration="800"
				>
					Crafting <br /> luxury <span className="font-playfair">spaces</span>
				</h1>
				<div className="relative z-0">
				<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
						alt="Chair Image"
						width={800}
						height={800}
						className="w-[22rem] h-[28rem] mx-auto absolute top-32 left-[300px] -translate-x-1/2 z-10 -rotate-45 "
					/>
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
						alt="Chair Image"
						width={800}
						height={800}
						className="w-[22rem] h-[28rem] mx-auto absolute top-10 left-1/3 -translate-x-1/2 z-10 -rotate-12 "
					/>
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
						alt="Chair Image"
						width={800}
						height={800}
						className="w-[22rem] h-[28rem] mx-auto absolute -top-6 left-1/2 -translate-x-1/2 z-50"
					/>
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
						alt="Chair Image"
						width={800}
						height={800}
						className="w-[22rem] h-[28rem] mx-auto absolute top-[35px] left-2/3 -translate-x-[170px] rotate-12 z-10"
					/>
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
						alt="Chair Image"
						width={800}
						height={800}
						className="w-[22rem] h-[28rem] mx-auto absolute top-32 left-2/3 -translate-x-[50px] z-0 rotate-45"
					/>
				</div>
				<div className="relative top-[500px] lg:top-96 flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between">
					<p
						className="uppercase text-sm"
						data-aos="fade-down"
						data-aos-duration="600"
					>
						We are @astral
					</p>
					<p
						className="uppercase text-sm"
						data-aos="fade-down"
						data-aos-duration="600"
					>
						interior design studio
					</p>
				</div>
			</div>
		</section>
	);
};

export default Banner;
