import ContactForm from "@/components/contact-page/contactForm";
import Information from "@/components/contact-page/information";
import FrequentQuestions from "@/components/contact-page/questions";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Astral Interior & Furniture - Get in Touch",
	description:
		"Have questions? Contact Astral Interior & Furniture for expert interior design solutions, custom furniture, and project consultations.",
};

const ContactPage = () => {
	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<ContactForm />
			<Information />
			<FrequentQuestions />
		</section>
	);
};

export default ContactPage;
