import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

// ✅ Generate static paths for all projects
export function generateStaticParams() {
	return projects.map((project) => ({
		id: project.id.toString(),
	}));
}

interface ProjectPageProps {
	params: { id: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
	const projectId = Number(params.id);
	const project = projects.find((p) => p.id === projectId);

	if (!project) {
		return (
			<div className="min-h-screen flex flex-col justify-center items-center">
				<h1 className="text-3xl font-bold">Project Not Found</h1>
				<Link href="/" className="text-[#135A58] mt-4">
					Go Back
				</Link>
			</div>
		);
	}

	return (
		<div className="px-4 py-20 max-w-6xl mx-auto">
			<Link href="/" className="text-[#135A58] mb-6 inline-block">
				&larr; Back to Projects
			</Link>

			<h1 className="text-4xl font-bold mb-6">{project.project_title}</h1>

			<div className="mb-6">
				<Image
					src={project.project_img}
					alt={project.project_title}
					width={1200}
					height={700}
					className="w-full h-auto rounded-lg"
				/>
			</div>

			<p className="text-lg leading-relaxed">{project.project_description}</p>
		</div>
	);
};

export default ProjectPage;
