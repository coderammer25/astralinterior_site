import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TextAnimate } from "../magicui/text-animate";

export const AboutUsComponent = () => {

	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="text-center">
				<h2
					className="text-2xl md:text-5xl lg:text-[5rem] uppercase leading-[1] mb-[2rem] text-primary"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<TextAnimate
						duration={800}
						animation="blurInDown"
						by="character"
						delay={3}
					>
						{"where design meets"}
					</TextAnimate>
				</h2>
				<h2
					className="text-2xl md:text-5xl lg:text-[5rem] uppercase leading-[1] mb-[2rem] text-primary"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<TextAnimate
						duration={500}
						animation="blurInUp"
						by="character"
						delay={4}
					>
						{"lifestyle in perfect"}
					</TextAnimate>
				</h2>
				<h2
					className="text-2xl md:text-5xl lg:text-[5rem] uppercase leading-[1] mb-[2rem] text-primary font-playfair"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<TextAnimate
						duration={500}
						animation="scaleUp"
						by="character"
						delay={5}
					>
						{"harmony"}
					</TextAnimate>
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
