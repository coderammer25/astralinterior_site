/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data";
import SingleProject from "./singleProject";
import { TextAnimate } from "../magicui/text-animate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
	const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { ref: linkRef, inView: linkInView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex flex-col gap-4 lg:gap-0 items-start lg:flex-row lg:justify-between lg:items-end">
				<motion.h2
					ref={titleRef}
					className="uppercase text-xl md:text-[3rem] lg:text-[8rem] leading-[1.1] lg:w-2/3 text-primary font-playfair"
					initial={{ opacity: 0, y: 30 }}
					animate={titleInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3 }}
				>
					<TextAnimate duration={300} animation="scaleUp" by="character" delay={5}>
						{"SELECTED"}
					</TextAnimate>
					<TextAnimate duration={300} animation="scaleUp" by="character" delay={5}>
						{"projects"}
					</TextAnimate>
				</motion.h2>

				<motion.div
					ref={linkRef}
					initial={{ opacity: 0, y: 30 }}
					animate={linkInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					<Link
						href="/projects"
						className="flex items-center gap-2 uppercase text-[14px] text-[#2c2b28]"
					>
						All projects{" "}
						<span className="bg-primary p-1">
							<FaArrowRight className="text-white" />
						</span>
					</Link>
				</motion.div>
			</div>

			<div className="mt-[4rem]">
				{projects.map((project, idx) => {
					const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

					return (
						<motion.div
							ref={ref}
							key={project.project_title}
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.3, delay: idx * 0.1 }}
						>
							<SingleProject project={project} project_number={idx} />
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
