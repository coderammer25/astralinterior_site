import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

type SingleProjectProps = {
	project: {
		project_title: string;
		project_category: string;
		project_img: string;
	};
	project_number: number;
};

const SingleProject = ({ project, project_number }: SingleProjectProps) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			className="relative"
			data-aos="fade-up"
			// data-aos-duration="1000"
		>
			<Image
				src={project.project_img}
				alt="Project Image 1"
				width={800}
				height={800}
				className="w-full"
			/>
			<div className="text-center space-y-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-10 p-5 rounded-full">
				<h4 className="font-playfair italic text-[1.25rem] font-light leading-[1]">
					{project_number < 10 ? `0${project_number + 1}` : project_number + 1}
				</h4>
				<h2 className="uppercase text-[2rem] lg:text-[5rem] leading-[1]">
					{project.project_title}
				</h2>
				<p className="uppercase text-[1rem]">{project.project_category}</p>
			</div>
		</div>
	);
};
export default SingleProject;
