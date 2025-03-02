import Image from "next/image";
import { services } from "../../data"; // Import dynamic service data
import IndividualService from "./individualService";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServicesComponent = () => {
	return (
		<section className="px-4 lg:py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
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
					{services.map((service, idx) => (
						<Image
							key={idx}
							src={service.img}
							alt={service.title}
							width={1000}
							height={1000}
							className="sticky top-24 w-[800px] h-[821px] mb-4 object-center object-cover"
							data-aos="fade-up"
						/>
					))}
				</div>
			</div>

			{/* "All Services" Button */}
			<Link
				href="/services"
				className="flex items-center gap-2 uppercase text-[14px] text-[#2c2b28] mt-4 lg:-mt-4"
			>
				All services{" "}
				<span className="bg-primary p-1">
					<FaArrowRight className="text-white"/>
				</span>
			</Link>
		</section>
	);
};

export default ServicesComponent;
