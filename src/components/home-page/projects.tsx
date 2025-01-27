import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
// import Image from "next/image"

// import projectImg1 from '../../../public/project-img-01.webp';
// import projectImg2 from '../../../public/project-img-02.webp';
// import projectImg3 from '../../../public/project-img-03.webp';
// import projectImg4 from '../../../public/project-img-04.png';
import { projects } from "@/data";
import SingleProject from "./singleProject";

const Projects = () => {
  return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex justify-between items-end">
				<h2 className="uppercase text-[8rem] leading-[1.1] w-2/3">
					Selected <span className="font-playfair">Projects</span>
				</h2>
				<Link
					href="/projects"
					className="flex items-center gap-2 uppercase text-[14px] text-[#2c2b28]"
				>
					All projects{" "}
					<span className="bg-black p-1">
						<FaArrowRight className="text-white" />
					</span>
				</Link>
			</div>
			<div className="mt-[4rem]">
				{projects.map((project, idx) => (
					<div key={project.project_title}>
						<SingleProject project={project} project_number={idx}/>
					</div>
				))}
			</div>
		</section>
	);
}
export default Projects