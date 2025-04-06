import { services_faq } from "@/data";
import FAQ from "./contact-page/questions";
import ServicesComponent from "./home-page/services";

const Services = () => {
	return (
		<>
			<div className="px-4 pt-[4rem] lg:pb-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<h1
					className="text-[3rem] lg:text-8xl lg:font-normal text-primary"
					data-aos="fade-right"
					data-aos-duration="1000"
				>
					SERVICES WE
					<span className="font-playfair lg:font-thin"> OFFER</span>{" "}
				</h1>
			</div>
			<ServicesComponent />
			<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<FAQ faqs={services_faq} />
			</section>
		</>
	);
};

export default Services;
