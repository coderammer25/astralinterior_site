import Image from "next/image";
import Link from "next/link";
import {
	FaComments,
	FaDraftingCompass,
	FaPalette,
	FaHammer,
	FaRegHandshake,
} from "react-icons/fa";

import transform_01 from "../../public/Office/office_1.jpg";
import transform_02 from "../../public/Office/office_2.jpg";
import transform_03 from "../../public/Office/office_3.jpg";
import transform_04 from "../../public/Office/office_4.jpg";

import image1 from "../../public/chair-about.webp";
import image4 from "../../public/mini-interior-about.webp";
import image5 from "../../public/mission_01.jpg";
import image6 from "../../public/who_we_are.jpg";
import { NumberTicker } from "./magicui/number-ticker";
import { CustomButton } from "./ui/customButton";
import FAQ from "./contact-page/questions";
import { about_faq } from "@/data";
import { Card, CardStack } from "./about-us/cardStack";
export default function About() {
	return (
		<>
			<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
				{/* Left Column - Text Content */}
				<div className="flex items-center justify-between">
					<div className="space-y-6 w-full xl:w-1/2 ">
						<h1
							className="text-[2rem] md:text-[4rem] leading-tight font-light text-primary"
							data-aos="fade-right"
							data-aos-duration="800"
						>
							BRINGING
							<br />
							IDEAS TO LIFE
						</h1>

						<p
							className="text-gray-600 w-full md:w-1/2 "
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							We are a renowned interior design agency dedicated to crafting
							spaces that inspire and elevate everyday living.
						</p>
						<CustomButton link="/contact-us">GET IN TOUCH</CustomButton>
					</div>

					{/* Right Column - Image Grid */}
					<div className="hidden xl:flex items-center justify-end gap-4 w-full xl:w-1/2">
						<div className="flex flex-col items-end gap-4">
							<Image
								src={transform_01}
								alt=""
								width={800}
								height={800}
								className="w-48 h-48"
								data-aos="fade-down"
								data-aos-duration="1000"
							/>
							<Image
								src={transform_02}
								alt=""
								width={800}
								height={800}
								className="w-48 h-48"
								data-aos="fade-up"
								data-aos-duration="1000"
							/>
						</div>
						<div className="flex flex-col gap-4  items-end">
							<Image
								src={transform_03}
								alt=""
								width={800}
								height={800}
								className="w-48 h-48"
								data-aos="fade-down"
								data-aos-duration="1000"
							/>
							<Image
								src={transform_04}
								alt=""
								width={800}
								height={800}
								className="w-48 h-48"
								data-aos="fade-up"
								data-aos-duration="1000"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
				<div className="lg:flex md:grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-16 items-center">
					<div className="relative w-full xl:w-1/2">
						<Image
							src={image6}
							alt="Interior design professional"
							width={600}
							height={800}
							className="w-full object-cover"
							priority
							data-aos="fade-right"
							data-aos-duration="1000"
						/>
						<Image
							src={image4}
							alt="mini"
							className="hidden xl:block absolute top-1/2 -translate-y-1/2 -right-20 h-40 w-40"
							data-aos="fade-left"
							data-aos-duration="1000"
						/>
					</div>

					<div className="space-y-8 mt-5 lg:ml-[150px] w-full xl:w-1/2">
						<div className="space-y-6">
							<h2
								className="text-sm uppercase tracking-wider text-muted-foreground"
								data-aos="fade-left"
								data-aos-duration="600"
							>
								WHO WE ARE
							</h2>

							<p
								className=" lg:text-[24px] leading-relaxed"
								data-aos="fade-left"
								data-aos-duration="800"
							>
								Our team of experienced designers collaborates closely with each
								client, ensuring that every project reflects their unique style
								and vision. From initial concept to final installation, we
								manage every aspect of the design journey, bringing a seamless
								and enjoyable experience.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-8 pt-8">
							<div
								className="space-y-2"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<p className="md:text-5xl lg:text-7xl font-serif font-bold">
									+
									<NumberTicker
										value={10}
										className="whitespace-pre-wrap tracking-tighter"
									/>
								</p>
								<p className="text-sm">Years of experience</p>
							</div>
							<div
								className="space-y-2"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<p className=" md:text-5xl lg:text-7xl font-serif font-bold">
									+
									<NumberTicker
										value={90}
										className="whitespace-pre-wrap tracking-tighter"
									/>
								</p>
								<p className="text-sm">Successful projects</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white -mt-[50px] px-4">
				{/* Background text */}
				<div className="absolute w-full flex justify-center items-center space-x-5">
					<span className="text-6xl lg:text-9xl leading-none">OUR</span>
					<span className="text-6xl lg:text-9xl leading-none">PROCESS</span>
				</div>

				{/* Card stack effect */}
				<div className="relative max-w-2xl h-[280px] w-[450px]">
					<CardStack items={workProcessCards} />
				</div>
			</div>

			<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
				<div className="flex flex-col-reverse lg:flex-row justify-between items-center">
					<div className="space-y-8 mt-5 text-center xl:text-left w-full xl:w-1/2">
						<div className="space-y-6 ">
							<h2
								className="text-base md:text-base lg:text-lg font-medium uppercase tracking-wider text-muted-foreground"
								data-aos="fade-right"
								data-aos-duration="600"
							>
								OUR MISSION
							</h2>

							<p
								className=" md:text-xl lg:text-[25px] leading-relaxed"
								data-aos="fade-right"
								data-aos-duration="800"
							>
								Our mission is to create spaces that inspire, uplift, and enrich
								the lives of those who experience them. We believe that great
								design goes beyond aesthetics it’s about creating functional,
								personalized environments that reflect our clients&apos; unique
								lifestyles and aspirations.
							</p>
						</div>

						<CustomButton link="/contact-us">GET IN TOUCH</CustomButton>
					</div>

					<div className="hidden xl:flex mt-8 lg:w-1/2 flex-col gap-4 lg:gap-0 relative">
						<Image
							src={image1}
							alt="mini"
							className="xl:absolute top-1/2 -translate-y-1/2 left-32 h-34 w-32 z-10"
							data-aos="fade-right"
							data-aos-duration="1000"
						/>
						<Image
							src={image5}
							alt="Interior design professional"
							width={1600}
							height={800}
							className="xl:w-2/3 object-cover ml-auto"
							priority
							data-aos="fade-left"
							data-aos-duration="1000"
						/>
					</div>
				</div>
			</section>

			<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
					<p
						className="inline-block px-3 py-px mb-4 text-xl md:text-7xl font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 text-primary"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						Discover Our <span className="font-playfair">Team</span>
					</p>
				</div>

				<div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
					<div data-aos="zoom-in-down" data-aos-duration="1000">
						<div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
							<Image
								height={750}
								width={1260}
								className="absolute object-cover w-full h-full rounded-3xl"
								src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b9136fe128fd28f4e21f_client-01.webp"
								alt="Person"
							/>
						</div>
						<div className="flex flex-col sm:text-center ">
							<p className="text-lg font-bold">Oliver Aguilerra</p>
							<p className="mb-5 text-xs text-gray-800">Product Manager</p>
							<div className="flex items-center space-x-3 sm:justify-center">
								<Link
									href="/"
									className="transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
										<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
									</svg>
								</Link>
								<Link
									href="/"
									className="transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
										<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>

					<div data-aos="zoom-in-down" data-aos-duration="1000">
						<div className="relative pb-56 mb-4 rounded  shadow lg:pb-64">
							<Image
								height={750}
								width={1260}
								className="absolute object-cover w-full h-full rounded-3xl"
								src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b9132c39026fe2577661_client-03.webp"
								alt="Person"
							/>
						</div>
						<div className="flex flex-col sm:text-center">
							<p className="text-lg font-bold">John Doe</p>
							<p className="mb-5 text-xs text-gray-800">Good guy</p>
							<div className="flex items-center space-x-3 sm:justify-center">
								<Link
									href="/"
									className="transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
										<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
									</svg>
								</Link>
								<Link
									href="/"
									className="transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
										<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<FAQ faqs={about_faq} />
			</section>
		</>
	);
}

const workProcessCards: Card[] = [
	{
		id: 1,
		name: "Step 1",
		designation: "Consultation",
		content: (
			<div className="space-y-2">
				<FaComments className="text-2xl text-blue-600 dark:text-blue-400" />
				<h3 className="text-lg font-semibold">Consultation</h3>
				<p className="text-sm">
					We listen to your needs and ideas to understand your space and vision.
				</p>
			</div>
		),
	},
	{
		id: 2,
		name: "Step 2",
		designation: "Planning",
		content: (
			<div className="space-y-2">
				<FaDraftingCompass className="text-2xl text-purple-600 dark:text-purple-400" />
				<h3 className="text-lg font-semibold">Planning</h3>
				<p className="text-sm">
					We develop a tailored layout, budget, and schedule for your project.
				</p>
			</div>
		),
	},
	{
		id: 3,
		name: "Step 3",
		designation: "Design",
		content: (
			<div className="space-y-2">
				<FaPalette className="text-2xl text-pink-600 dark:text-pink-400" />
				<h3 className="text-lg font-semibold">Design</h3>
				<p className="text-sm">
					We present stunning interior concepts and mood boards to match your
					style.
				</p>
			</div>
		),
	},
	{
		id: 4,
		name: "Step 4",
		designation: "Execution",
		content: (
			<div className="space-y-2">
				<FaHammer className="text-2xl text-green-600 dark:text-green-400" />
				<h3 className="text-lg font-semibold">Execution</h3>
				<p className="text-sm">
					Our team brings the design to life with skilled craftsmanship and
					precision.
				</p>
			</div>
		),
	},
	{
		id: 5,
		name: "Step 5",
		designation: "Handover",
		content: (
			<div className="space-y-2">
				<FaRegHandshake className="text-2xl text-yellow-600 dark:text-yellow-400" />
				<h3 className="text-lg font-semibold">Handover</h3>
				<p className="text-sm">
					Final walkthrough and delivery of a beautifully transformed interior
					space.
				</p>
			</div>
		),
	},
];
