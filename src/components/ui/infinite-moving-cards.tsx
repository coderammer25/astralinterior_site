"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { TextAnimate } from "../magicui/text-animate";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
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
					{"What Clients Say About Us"}
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
						className="relative w-[250px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] overflow-hidden"
						key={item.name}
					>
						<blockquote>
							<div
								aria-hidden="true"
								className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
								{item.quote}
							</span>
							<div className="relative z-20 mt-6 flex flex-row items-center">
								<span className="flex flex-col gap-1">
									<span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
										{item.name}
									</span>
									<span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
										{item.title}
									</span>
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
