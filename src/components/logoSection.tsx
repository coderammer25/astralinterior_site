"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { TextAnimate } from "./magicui/text-animate";

export const LogoSection = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		id: string;
		title: string;
		src: StaticImageData;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);
	const { ref: titleRef, inView: titleInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		addAnimation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] py-[8rem]",
				className
			)}
		>
			<motion.h2
				ref={titleRef}
				className="uppercase text-xl md:text-[3rem] leading-[1.1] lg:w-2/3 text-primary font-playfair text-center mx-auto mb-8"
				initial={{ opacity: 0, y: 30 }}
				animate={titleInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3 }}
			>
				<TextAnimate
					duration={300}
					animation="scaleUp"
					by="character"
					delay={5}
				>
					{"Our Featured Clients"}
				</TextAnimate>
			</motion.h2>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item) => (
					<li
						key={item.id}
						className="flex-shrink-0 w-[200px] h-[100px] flex items-center justify-center"
					>
						<Image
							src={item.src}
							alt={item.title}
							className="object-contain w-full h-full"
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
