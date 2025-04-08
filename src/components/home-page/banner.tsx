"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimate } from "../magicui/text-animate";
import { useEffect, useState } from "react";

const Banner = () => {
	const [xValue, setXValue] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setXValue(10); // sm
			} else if (window.innerWidth < 1440) {
				setXValue(10); // md
			} else {
				setXValue(30); // lg
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="px-4 pt-[4rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="text-center space-y-8 min-h-screen">
				<div className="mb-32">
					<div className="mt-10">
						<h1
							className="uppercase text-2xl md:text-6xl xl:text-[7rem] xl:leading-[0.9] text-primary "
							data-aos="fade-down"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<TextAnimate
								duration={500}
								animation="blurInUp"
								by="character"
								delay={5}
							>
								{"Crafting luxury"}
							</TextAnimate>
						</h1>
						<h1
							className="uppercase text-2xl md:text-6xl xl:text-[7rem] xl:leading-[0.9] text-primary font-playfair"
							data-aos="fade-down"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<TextAnimate
								duration={500}
								animation="blurInUp"
								by="character"
								delay={5}
							>
								{"spaces"}
							</TextAnimate>
						</h1>
					</div>
				</div>
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -400 }}
					transition={{
						duration: 1,
						ease: [0.42, 0, 0.58, 1],
					}}
					exit={{ opacity: 0, y: -400 }}
					className="relative z-0"
				>
					{/* left - 2 */}
					<motion.div
						initial={{ opacity: 0, x: -400 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
					>
						<Image
							src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50be6f594839db8f157_Minimalist%20Interior%20with%20Geometric%20Light-p-800.webp"
							alt="Chair Image"
							width={800}
							height={800}
							className="hidden md:block lg:block md:w-[10rem] xl:w-[18rem] xl:h-[22rem] mx-auto absolute top-36 left-1/3 -translate-x-[200px] z-10 -rotate-[40deg] "
						/>
					</motion.div>

					{/* left - 1 */}

					<motion.div
						initial={{ opacity: 0, x: xValue }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
					>
						<Image
							src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50a819d1d5e02a89879_Modern%20Sculptural%20Chair%20Design.webp"
							alt="Chair Image"
							width={800}
							height={800}
							className="w-[5rem] md:w-[12rem] xl:w-[18rem] xl:h-[22rem] mx-auto absolute top-5 md:top-10 lg:top-10 left-1/3 -translate-x-1/2 z-10 -rotate-[15deg] "
						/>
					</motion.div>

					{/* main - middle */}

					<motion.div
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.15,
							delay: 0.0,
							ease: [0.42, 0, 0.58, 1],
						}}
					>
						<Image
							src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
							alt="Chair Image"
							width={800}
							height={800}
							className="w-[5rem] md:w-[12rem] xl:w-[18rem] xl:h-[24rem] mx-auto absolute -top-2 left-1/2 -translate-x-1/2 z-[100]"
						/>
					</motion.div>

					{/* right - 2 */}

					<motion.div
						initial={{ opacity: 0, x: 400 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
					>
						<Image
							src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b512870cc6e108d4e4e8_Sculptural%20Black%20Shell%20in%20Modern%20Room-p-500.webp"
							alt="Chair Image"
							width={800}
							height={800}
							className="hidden md:block lg:block w-[13rem] md:w-[10rem]  md:h-[16rem] xl:w-[18rem] xl:h-[23rem] mx-auto absolute md:top-[100px] xl:top-[130px] left-2/3 -translate-x-[30px] rotate-[38deg] z-10"
						/>
					</motion.div>

					{/* right 1 */}

					<motion.div
						initial={{ opacity: 0, x: xValue }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
					>
						<Image
							src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50f14c39bfea0deaefc_Serene%20Geometric%20and%20Organic%20Composition-p-800.webp"
							alt="Chair Image"
							width={800}
							height={800}
							className="w-[5rem] h-[13rem] md:w-[12rem] md:h-[16rem] xl:w-[18rem] xl:h-[22rem] mx-auto absolute top-[15px] md:top-[30px] xl:top-[35px] left-2/3 -translate-x-[80px] md:-translate-x-[120px] xl:-translate-x-[150px] rotate-12 z-10"
						/>
					</motion.div>

					{/* close */}
				</motion.div>
			</div>
		</section>
	);
};

export default Banner;
