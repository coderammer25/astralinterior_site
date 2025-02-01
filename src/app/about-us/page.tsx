import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
};

const AboutPage = () => {
	return (
		<div>
			<About />
		</div>
	);
};

export default AboutPage;
