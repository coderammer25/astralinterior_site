import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
};

const AboutPage = () => {
	return (
		<>
			<About />
		</>
	);
};

export default AboutPage;
