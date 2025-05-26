"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import project_03 from "../../../../public/Office/office 1.png";
import project_04 from "../../../../public/Office/office_01.jpg";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const ProjectTwo = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [screenWidth, setScreenWidth] = useState(0);

	const isInView = useInView(ref, { once: true });
	const contentControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			contentControls.start("visible");
		}
	}, [isInView]);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
	}, []);

	const cardVariants = {
		visible: {
			translateX: screenWidth < 768 ? "0%" : "-50%", // Move in from left on mobile
			opacity: 1,
		},
		hidden: {
			translateX: screenWidth < 768 ? "-100%" : "100%", // Start fully off-screen on mobile
			opacity: 0,
		},
	};

	// {
	// 			visible: { translateX: "-50%", opacity: 1 },
	// 			hidden: { translateX: "100%", opacity: 0 },
	// 		}

	return (
		<div ref={ref}>
			<motion.div
				variants={cardVariants}
				initial="hidden"
				animate={contentControls}
				transition={{ duration: 1.2, ease: "easeIn" }}
			>
				<div className="flex md:flex-row-reverse justify-start pt-10 md:pt-40 md:gap-10">
					<div className="sticky z-40 items-center top-40 max-w-xs lg:max-w-sm">
						<div className="h-10 absolute left-3 md:-left-4 w-10 rounded-full bg-white flex items-center justify-center">
							<div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
						</div>
					</div>

					<div className="relative pl-20 pr-4 md:pl-4">
						<div>
							<p className="text-sm md:text-[1em] leading-[1.4] mb-8 md:text-right mt-3">
								Office
							</p>
							<div className="flex flex-col gap-8">
								<Image
									src={project_03}
									alt="startup template"
									width={500}
									height={500}
									className="rounded-lg object-cover h-20 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
								/>
								<Image
									src={project_04}
									alt="startup template"
									width={500}
									height={500}
									className="rounded-lg object-cover h-20 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
								/>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
export default ProjectTwo;

{
	/* <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#072120]">
									{item.title}
								</h3> */
}

{
	/* <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 text-center w-full mx-auto border">
									{item.title}
								</h3> */
}
{
	/* <Image
									src="https://assets.aceternity.com/templates/startup-3.webp"
									alt="startup template"
									width={500}
									height={500}
									className="rounded-lg object-cover h-20 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
								/>
								<Image
									src="https://assets.aceternity.com/templates/startup-4.webp"
									alt="startup template"
									width={500}
									height={500}
									className="rounded-lg object-cover h-20 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
								/> */
}
