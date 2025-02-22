import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Astral Interior & Furniture",
	description:
		"Learn more about Astral Interior & Furniture. Our story, mission, and commitment to delivering top-notch interior design and furniture solutions.",
};

const AboutPage = () => {
	return (
		<>
			<About />
		</>
	);
};

export default AboutPage;
