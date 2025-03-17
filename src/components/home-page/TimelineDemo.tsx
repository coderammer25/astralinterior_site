import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

// import project_01 from "../public/exterior/exterior_1.jpg";
import project_02 from "../../../public/Interior/interior_1.jpg";
import project_03 from "../../../public/Office/office 1.png";
// import project_04 from "../public/hospital/hospital_1.jpg";
import project_05 from "../../../public/showroom/showroom_1.jpg";
// import project_06 from "../public/bar and restaurant/bar_1.jpg";
// import project_07 from "../public/bar and restaurant/resturent_1.jpg";
// import project_08 from "../public/furniture/furniture_1.jpg";

export function TimelineDemo() {
	const data = [
		{
			title: "INTERIOR",
			content: (
				<div>
					<p className="text-sm md:text-[1em] leading-[1.4] md:w-3/4 mb-8">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src={project_02}
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/templates/startup-2.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/templates/startup-3.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/templates/startup-4.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: "OFFICE",
			content: (
				<div>
					<p className="text-sm md:text-[1em] leading-[1.4] md:w-3/4 mb-8">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src={project_03}
							alt="hero template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/features-section.png"
							alt="feature template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/pro/bento-grids.png"
							alt="bento template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/cards.png"
							alt="cards template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: "SHOWROOM",
			content: (
				<div>
					<p className="text-sm md:text-[1em] leading-[1.4] md:w-3/4 mb-8">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src={project_05}
							alt="hero template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/features-section.png"
							alt="feature template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/pro/bento-grids.png"
							alt="bento template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/cards.png"
							alt="cards template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}
