import Image from "next/image";

import serviceImg from '../../../public/mini-interior-about.webp'
import { services } from "@/data";
import IndividualService from "./individualService";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "antd/es/typography/Link";

const ServicesComponent = () => {
  return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex items-start gap-4 md:gap-0 justify-between min-h-screen">
				<div className="w-1/2">
					{services.map((service, idx) => (
						<React.Fragment key={service.title}>
							<IndividualService service={service} number={idx} />
						</React.Fragment>
					))}
					<Link
						href="/services"
						className="flex items-center gap-2 uppercase text-[14px] text-[#2c2b28]"
					>
						All services{" "}
						<span className="bg-black p-1">
							<FaArrowRight className="text-white" />
						</span>
					</Link>
				</div>
				<div className="sticky top-10 w-1/2">
					<Image
						src={serviceImg}
						alt="Service Image"
						width={600}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
export default ServicesComponent