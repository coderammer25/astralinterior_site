"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import img1 from "../../assets/asset 1.jpeg";
import img2 from "../../assets/asset 2.jpeg";
import img3 from "../../assets/asset 25.jpeg";
import img4 from "../../assets/asset 5.jpeg";
import img5 from "../../assets/office.jpg";
import img6 from "../../assets/asset 10.jpeg";
import { TextAnimate } from "../magicui/text-animate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

// ✅ Now each image has its own title
const galleryImages = [
	{ src: img1, title: "Luxury Bedroom" },
	{ src: img2, title: "Modern Living Room" },
	{ src: img3, title: "Beautiful Dining room" },
	{ src: img4, title: "Minimalist Kitchen" },
	{ src: img5, title: "Cozy Workspace" },
	{ src: img6, title: "Welcoming Space" },
];

const OurGallery: React.FC = () => {
	const galleryRef = useRef<HTMLDivElement | null>(null);

	const { ref: titleRef, inView: titleInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useLayoutEffect(() => {
		if (!galleryRef.current) return;

		const cards = gsap.utils.toArray<HTMLDivElement>(
			galleryRef.current.querySelectorAll(".gallery-card")
		);

		if (cards.length === 0) return;

		gsap.fromTo(
			cards,
			{ opacity: 0, y: 50, scale: 0.95 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				stagger: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: galleryRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					ref={titleRef}
					className="uppercase text-xl md:text-[3rem] leading-[1.1] lg:w-2/3 text-primary font-playfair text-center mx-auto mb-12"
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
						{"Our Gallery"}
					</TextAnimate>
				</motion.h2>

				<div
					ref={galleryRef}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{galleryImages.map((item, index) => (
						<div
							key={index}
							className="gallery-card relative h-64 rounded-xl overflow-hidden shadow-lg group"
						>
							<Image
								src={item.src}
								alt={item.title}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
							/>
							{/* Hover Overlay */}
							<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p className="absolute bottom-3 left-3 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out">
									{item.title}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurGallery;
