import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const AboutUsComponent = () => {

	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="text-center">
				<h2
					className="text-5xl lg:text-[5rem] uppercase leading-[1] mb-[2rem] text-primary"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					where design meets lifestyle in perfect{" "}
					<span className="font-playfair">harmony</span>.
				</h2>
				<Link
					href="/about-us"
					className="flex items-center justify-center gap-2 uppercase text-[14px] text-[#2c2b28]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					About Us
					<span className="bg-primary p-1">
						<FaArrowRight className="text-white" />
					</span>
				</Link>
			</div>
		</section>
	);
};
