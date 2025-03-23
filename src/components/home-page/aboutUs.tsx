import { TextAnimate } from "../magicui/text-animate";
import { CustomButton } from "../ui/customButton";


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
				<CustomButton link="/about-us">About Us</CustomButton>
			</div>
		</section>
	);
};
