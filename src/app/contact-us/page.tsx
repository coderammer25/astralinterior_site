import ContactForm from "@/components/contact-page/contactForm";
import Information from "@/components/contact-page/information";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
};

const ContactPage = () => {
	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<ContactForm/>
			<Information/>
		</section>
	);
};

export default ContactPage;
