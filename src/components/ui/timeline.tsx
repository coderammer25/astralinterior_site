"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TextAnimate } from "../magicui/text-animate";
import { useInView } from "react-intersection-observer";
import ProjectOne from "../home-page/projects/projectOne";
import ProjectTwo from "../home-page/projects/ProjectTwo";
import ProjectThree from "../home-page/projects/ProjectThree";

export const Timeline = () => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	// Title animation trigger
	const { ref: titleRef, inView: titleInView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	// Project animations triggers
	const { ref: p1Ref, inView: p1InView } = useInView({
		triggerOnce: false,
		threshold: 0.15,
	});
	const { ref: p2Ref, inView: p2InView } = useInView({
		triggerOnce: false,
		threshold: 0.15,
	});
	const { ref: p3Ref, inView: p3InView } = useInView({
		triggerOnce: false,
		threshold: 0.15,
	});

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 40%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			className="px-4 pt-[4rem] pb-[4rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen overflow-hidden"
			ref={containerRef}
		>
			{/* Title */}
			<div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
				<motion.h2
					ref={titleRef}
					className="uppercase text-xl md:text-[3rem] leading-[1.1] lg:w-2/3 text-primary font-playfair text-center mx-auto mb-4"
					initial={{ opacity: 0, y: 30 }}
					animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.3 }}
				>
					<TextAnimate
						duration={300}
						animation="scaleUp"
						by="character"
						delay={5}
					>
						{"SELECTED projects"}
					</TextAnimate>
				</motion.h2>

				<p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto text-center">
					We&apos;ve been working on interior and exterior for the past 9 years.
					Here&apos;s some of our best projects.
				</p>
			</div>

			{/* Projects */}
			<div
				ref={ref}
				className="relative px-4 pt-[4rem] pb-[4rem] mx-auto sm:max-w-xl md:px-24 lg:px-8 min-h-screen"
			>
				<motion.div
					ref={p1Ref}
					initial={{ opacity: 0, x: 50 }}
					animate={p1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.4 }}
				>
					<ProjectOne />
				</motion.div>

				<motion.div
					ref={p2Ref}
					initial={{ opacity: 0, x: 50 }}
					animate={p2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
					transition={{ duration: 0.4 }}
				>
					<ProjectTwo />
				</motion.div>

				<motion.div
					ref={p3Ref}
					initial={{ opacity: 0, x: 50 }}
					animate={p3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.4 }}
				>
					<ProjectThree />
				</motion.div>

				{/* Timeline vertical line */}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-1/2 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-[#072120] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
