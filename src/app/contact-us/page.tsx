"use client";

import ContactForm from "@/components/contact-page/contactForm";
import Information from "@/components/contact-page/information";
import FrequentQuestions from "@/components/contact-page/questions";
import { GET_ALL_MESSAGES } from "@/graphql/queries/query";
import { useQuery } from "@apollo/client";

// export const metadata: Metadata = {
// 	title: "Contact Us",
// };

const ContactPage = () => {
	const { data, loading, error } = useQuery(GET_ALL_MESSAGES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log(data);

	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<ContactForm />
			<Information />
			<FrequentQuestions />
		</section>
	);
};

export default ContactPage;
