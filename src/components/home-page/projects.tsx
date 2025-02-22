import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data";
import SingleProject from "./singleProject";
import "aos/dist/aos.css"; // Import AOS CSS
import { TextAnimate } from "../magicui/text-animate";

const Projects = () => {
	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex flex-col gap-4 lg:gap-0 items-start lg:flex-row lg:justify-between lg:items-end">
				<h2
					className="uppercase text-xl md:text-[3rem] lg:text-[8rem] leading-[1.1] lg:w-2/3 text-primary font-playfair"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<TextAnimate
						duration={500}
						animation="scaleUp"
						by="character"
						delay={5}
					>
						{"SELECTED"}
					</TextAnimate>
					<TextAnimate
						duration={500}
						animation="scaleUp"
						by="character"
						delay={5}
					>
						{"projects"}
					</TextAnimate>
				</h2>

				<Link
					href="/projects"
					className="flex items-center gap-2 uppercase text-[14px] text-[#2c2b28]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					All projects{" "}
					<span className="bg-primary p-1">
						<FaArrowRight className="text-white" />
					</span>
				</Link>
			</div>

			<div className="mt-[4rem]">
				{projects.map((project, idx) => (
					<div key={project.project_title}>
						<SingleProject project={project} project_number={idx} />
					</div>
				))}
			</div>
		</section>
	);
};
export default Projects;
