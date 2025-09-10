import Image, { StaticImageData } from "next/image";

type SingleProjectProps = {
	project: {
		project_title: string;
		project_category: string;
		project_img: StaticImageData;
	};
	project_number: number;
};

const SingleProject = ({ project, project_number }: SingleProjectProps) => {
	return (
		<div className="relative group overflow-hidden rounded-2xl">
			{/* Project Image */}
			<Image
				src={project.project_img}
				alt={project.project_title}
				width={800}
				height={800}
				className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
				{/* Project Number */}
				<h4 className="font-playfair italic text-lg font-light text-white mb-2">
					{project_number < 10 ? `0${project_number + 1}` : project_number + 1}
				</h4>

				{/* Project Title */}
				<h2 className="uppercase text-2xl md:text-3xl font-bold text-white tracking-wide">
					{project.project_title}
				</h2>

				{/* Category */}
				<p className="uppercase text-sm md:text-base text-gray-200 mt-1">
					{project.project_category}
				</p>
			</div>
		</div>
	);
};

export default SingleProject;
