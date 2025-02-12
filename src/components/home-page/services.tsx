import Image from "next/image";

import serviceImg from "../../../public/mini-interior-about.webp";
import serviceImg_01 from '../../../public/01_services.webp'
import serviceImg_03 from '../../../public/03_services.webp'
import { services } from "@/data";
import IndividualService from "./individualService";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServicesComponent = () => {
	return (
		<section className="px-4 lg:py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
			<div className="flex flex-col lg:flex-row items-start lg:items-start gap-4 md:gap-0 justify-between">
				<div className="w-full lg:w-1/2 space-y-10 lg:space-y-0 mt-10 lg:mt-0">
					{services.map((service, idx) => (
						<div key={service.title} className="lg:h-[800px]">
							<IndividualService service={service} number={idx} />
						</div>
					))}
				</div>

				<div className="hidden lg:block lg:w-1/2 h-full">
					<Image
						src={serviceImg}
						alt="Service Image"
						width={800}
						height={800}
						className="sticky top-24 w-full h-full mb-4"
						data-aos="fade-up"
						data-aos-offset="980"
						data-aos-duration="500"
					/>
					<Image
						src={serviceImg_01}
						alt="Service Image"
						width={800}
						height={800}
						className="sticky top-24 w-full h-full mb-4"
						data-aos="fade-up"
						data-aos-offset="980"
						data-aos-duration="500"
					/>
					<Image
						src={serviceImg}
						alt="Service Image"
						width={800}
						height={800}
						className="sticky top-24 w-full h-full mb-4"
						data-aos="fade-up"
						data-aos-offset="980"
						data-aos-duration="500"
					/>
					<Image
						src={serviceImg_03}
						alt="Service Image"
						width={800}
						height={800}
						className="sticky top-24 w-full h-full mb-4"
						data-aos="fade-up"
						data-aos-offset="980"
						data-aos-duration="500"
					/>
				</div>
			</div>

			<Link
				href="/services"
				className="flex items-center gap-2 uppercase text-[14px] text-[#2c2b28] mt-4 lg:-mt-4"
			>
				All services{" "}
				<span className="bg-primary p-1">
					<FaArrowRight className="text-white" />
				</span>
			</Link>
		</section>
	);
};
export default ServicesComponent;


