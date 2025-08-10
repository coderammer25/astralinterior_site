"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { videos } from "@/data"; // import your videos array

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
			translateX: screenWidth < 768 ? "0%" : "-50%", // Move in from left on desktop
			opacity: 1,
		},
		hidden: {
			translateX: screenWidth < 768 ? "-100%" : "100%", // Start fully off-screen
			opacity: 0,
		},
	};

	// Convert YouTube URL to embeddable URL
	const getEmbedUrl = (url: string) => {
		const videoId =
			url.split("youtu.be/")[1]?.split("?")[0] ||
			url.split("v=")[1]?.split("&")[0];
		return `https://www.youtube.com/embed/${videoId}`;
	};

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
						<div className="h-10 absolute -left-[2px] md:-left-5 w-10 rounded-full bg-white flex items-center justify-center">
							<div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2 md:ml-[2px]" />
						</div>
					</div>

					<div className="relative pl-20 pr-4 md:pl-4 w-full max-w-md">
						<p className="text-sm md:text-[1em] leading-[1.4] mb-8 md:text-right mt-3">
							Office Videos
						</p>
						<div className="flex flex-col gap-6">
							{videos.slice(2, 4).map((video) => (
								<iframe
									key={video._id}
									width="100%"
									height="200"
									src={getEmbedUrl(video.url)}
									title={video.title}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)] hover:shadow-lg transition-shadow duration-300"
								/>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectTwo;
