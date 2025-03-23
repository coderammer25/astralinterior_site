"use client";

import { services } from "../../data"; // Import dynamic service data
import IndividualService from "./individualService";
import { CustomButton } from "../ui/customButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TextAnimate } from "../magicui/text-animate";
import { StickyImage } from "../ui/stickyImage";

const ServicesComponent = () => {
	const { ref: titleRef, inView: titleInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="px-4 lg:py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
			<div className="max-w-7xl mx-auto pt-20 mb-8 px-4 md:px-8 lg:px-10">
				<motion.h2
					ref={titleRef}
					className="uppercase text-xl md:text-[3rem] leading-[1.1] lg:w-2/3 text-primary font-playfair text-center mx-auto mb-4"
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
						{"our services"}
					</TextAnimate>
				</motion.h2>
				<p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto text-center">
					We&apos;ve been working on interior and exterior for the past 9 years.
					Here&apos;s some of out best projects.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row items-start lg:items-start gap-4 md:gap-4 justify-between md:mb-8">
				{/* Left Side - Services List */}
				<div className="w-full lg:w-1/2 space-y-10 lg:space-y-0 mt-10 lg:mt-0 p-10 md:p-[68px] md:pr-0 bg-black/5 h-full">
					{services.map((service, idx) => (
						<div key={service.title} className="lg:h-[800px]">
							<IndividualService service={service} number={idx} />
						</div>
					))}
				</div>

				{/* Right Side - Dynamic Image Display */}
				<div className="hidden lg:block lg:w-1/2 h-full">
					<StickyImage
						imageLink="https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Interior"
						style="top-[6rem]"
					/>
					<StickyImage
						imageLink="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Interior"
						style="top-[9rem]"
					/>
					<StickyImage
						imageLink="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Interior"
						style="top-[12rem]"
					/>
					<StickyImage
						imageLink="https://plus.unsplash.com/premium_photo-1681113076872-c74b8926e70c?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						title="Interior"
					/>
				</div>
			</div>
			<CustomButton link="/services">All Services</CustomButton>
		</section>
	);
};

export default ServicesComponent;
