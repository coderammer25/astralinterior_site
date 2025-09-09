"use client";
import { useScroll, useTransform, motion, animate } from "framer-motion";
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

	// Project states
	const [dotFillProgress, setDotFillProgress] = useState(0);
	const [dotFillProgressTwo, setDotFillProgressTwo] = useState(0);
	const [dotFillProgressThree, setDotFillProgressThree] = useState(0);

	// Detect mobile for responsive animation direction
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Title animation
	const { ref: titleRef, inView: titleInView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	// Timeline line progress
	const { scrollYProgress: lineProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 40%"],
	});

	const heightTransform = useTransform(lineProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(lineProgress, [0, 0.1], [0, 1]);

	// Project One sticky
	const lineReachedSticky = useTransform(lineProgress, [0.1, 0.15], [0, 1]);
	const stickyOpacity = useTransform(lineReachedSticky, [0, 1], [0, 1]);
	const stickyScale = useTransform(lineReachedSticky, [0, 0.8, 1], [0, 1.2, 1]);

	// Project Two sticky
	const { scrollYProgress: projectTwoStickyProgress } = useScroll({
		target: containerRef,
		offset: ["start 40%", "end 70%"],
	});
	const projectTwoStickyOpacity = useTransform(
		projectTwoStickyProgress,
		[0.1, 0.15],
		[0, 1]
	);
	const projectTwoStickyScale = useTransform(
		projectTwoStickyProgress,
		[0, 0.8, 1],
		[0, 1.2, 1]
	);

	// Project Three sticky
	const { scrollYProgress: projectThreeStickyProgress } = useScroll({
		target: containerRef,
		offset: ["start 75%", "end 110%"],
	});
	const projectThreeStickyOpacity = useTransform(
		projectThreeStickyProgress,
		[0.9, 0.96],
		[0, 1]
	);
	const projectThreeStickyScale = useTransform(
		projectThreeStickyProgress,
		[0, 0.8, 1],
		[0, 1.2, 1]
	);

	// Set container height
	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.getBoundingClientRect().height);
		}
	}, []);

	// Project One fill animation
	useEffect(() => {
		const unsubscribe = lineReachedSticky.on("change", (latest) => {
			if (latest > 0.5) {
				animate(dotFillProgress, 1, {
					duration: 0.8,
					ease: "easeOut",
					onUpdate: setDotFillProgress,
				});
			} else {
				setDotFillProgress(0);
			}
		});
		return () => unsubscribe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Project Two fill animation
	useEffect(() => {
		const unsubscribe = projectTwoStickyProgress.on("change", (latest) => {
			if (latest > 0.5) {
				animate(dotFillProgressTwo, 1, {
					duration: 0.8,
					ease: "easeOut",
					onUpdate: setDotFillProgressTwo,
				});
			} else {
				setDotFillProgressTwo(0);
			}
		});
		return () => unsubscribe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Project Three fill animation
	useEffect(() => {
		const unsubscribe = projectThreeStickyProgress.on("change", (latest) => {
			if (latest > 0.5) {
				animate(dotFillProgressThree, 1, {
					duration: 0.8,
					ease: "easeOut",
					onUpdate: setDotFillProgressThree,
				});
			} else {
				setDotFillProgressThree(0);
			}
		});
		return () => unsubscribe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				className="relative px-4 pt-[4rem] pb-[4rem] mx-auto sm:max-w-xl md:px-24 lg:px-8 min-h-screen "
			>
				{/* Project One sticky dot */}
				<motion.div
					className="md:sticky hidden md:top-[460px] z-0 md:flex items-center justify-center"
					style={{ opacity: stickyOpacity, scale: stickyScale }}
					transition={{ type: "spring", stiffness: 400, damping: 15 }}
				>
					<div className="relative h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
						<motion.div
							className="absolute inset-0 bg-[#072120] rounded-full"
							style={{ scale: dotFillProgress }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						/>
						<div className="relative h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2 z-10" />
					</div>
				</motion.div>

				{/* Project One */}
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={
						dotFillProgress === 1
							? { opacity: 1, x: 0 }
							: { opacity: 0, x: 100 }
					}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						delay: 0.5,
					}}
				>
					<ProjectOne />
				</motion.div>

				{/* Project Two sticky dot */}
				<motion.div
					className="md:sticky hidden md:top-[1150px] z-0 md:flex items-center justify-center"
					style={{
						opacity: projectTwoStickyOpacity,
						scale: projectTwoStickyScale,
					}}
					transition={{ type: "spring", stiffness: 400, damping: 15 }}
				>
					<div className="relative h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
						<motion.div
							className="absolute inset-0 bg-[#072120] rounded-full"
							style={{ scale: dotFillProgressTwo }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						/>
						<div className="relative h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2 z-10" />
					</div>
				</motion.div>

				{/* Project Two */}
				<motion.div
					initial={{ opacity: 0, x: isMobile ? 100 : -100 }}
					animate={
						dotFillProgressTwo === 1
							? { opacity: 1, x: 0 }
							: { opacity: 0, x: isMobile ? 100 : -100 }
					}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						delay: 0.5,
					}}
				>
					<ProjectTwo />
				</motion.div>

				{/* Project Three sticky dot */}
				<motion.div
					className="md:sticky hidden md:top-[1840px] z-0 md:flex items-center justify-center"
					style={{
						opacity: projectThreeStickyOpacity,
						scale: projectThreeStickyScale,
					}}
					transition={{ type: "spring", stiffness: 400, damping: 15 }}
				>
					<div className="relative h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
						<motion.div
							className="absolute inset-0 bg-[#072120] rounded-full"
							style={{ scale: dotFillProgressThree }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						/>
						<div className="relative h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2 z-10" />
					</div>
				</motion.div>

				{/* Project Three */}
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={
						dotFillProgressThree === 1
							? { opacity: 1, x: 0 }
							: { opacity: 0, x: 100 }
					}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						delay: 0.5,
					}}
				>
					<ProjectThree />
				</motion.div>

				{/* Timeline line */}
				<div
					style={{ height: height + "px" }}
					className="absolute md:left-1/2 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{ height: heightTransform, opacity: opacityTransform }}
						className="absolute inset-x-0 top-0 w-[2px] bg-[#072120] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
