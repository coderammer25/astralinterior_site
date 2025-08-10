"use client";

import { videos } from "@/data";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const ProjectOne = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [screenWidth, setScreenWidth] = useState(0);

	const isInView = useInView(ref, { once: true });
	const contentControls = useAnimation();

	useEffect(() => {
		setScreenWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		if (isInView) {
			contentControls.start("visible");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	const cardVariants = {
		visible: {
			translateX: screenWidth < 768 ? "0%" : "50%",
			opacity: 1,
		},
		hidden: {
			translateX: screenWidth < 768 ? "100%" : "-100%",
			opacity: 0,
		},
	};

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
				<div className="flex justify-start pt-10 md:pt-40 md:gap-10">
					{/* Sticky dot section */}
					<div className="sticky z-40 items-center top-40 max-w-xs lg:max-w-sm">
						<div className="h-10 absolute -left-[2px] md:-left-5 w-10 rounded-full bg-white flex items-center justify-center">
							<div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2 ml-[2px]" />
						</div>
					</div>

					{/* Videos column, only first 2 */}
					<div className="relative pl-20 pr-4 md:pl-4 w-full max-w-md">
						<p className="text-sm md:text-[1em] leading-[1.4] mb-8 mt-3">
							Interior Videos
						</p>
						<div className="flex flex-col gap-6">
							{videos.slice(0, 2).map((video) => (
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

export default ProjectOne;
